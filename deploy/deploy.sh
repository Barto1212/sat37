#!/bin/bash
user=$1
ipAdress=$2
localadressScript="/var/www/loic-barthomeuf"
localadressSources=$localadressScript"/sources"

adressComputer="$user""@""$ipAdress"

adressScript=$adressComputer":"$localadressScript
adressSources=$adressComputer":"$localadressSources

# copie de la source front
cd ..
tar --exclude="node_modules" --exclude="package-lock.json" --exclude=".next" -cf sources.tar *

gzip sources.tar


# copie du dossier compressé
scp sources.tar.gz $adressScript

cd ./deploy
# copie du script à éxécuter
scp config/apideployserver.sh $adressScript

# on le convertit :
ssh $adressComputer dos2unix $localadressScript"/"apideployserver.sh
# on exécute le script
ssh $adressComputer $localadressScript"/"apideployserver.sh
# on le supprime :
ssh $adressComputer rm $localadressScript"/"apideployserver.sh

cd ..

rm sources.tar.gz