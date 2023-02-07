#!/bin/bash
adressServer=$1


adressComputer="$user""@""$ipAdress"

adressScript=$adressComputer":"$localadressScript
adressSources=$adressComputer":"$localadressSources

# copie de la source front
cd ..
# tar --exclude="node_modules" --exclude="package-lock.json" --exclude=".next" -cf sources.tar *
tar -czf sources.tar.gzip out


# copie du dossier compressé
scp sources.tar.gzip $adressServer":/tmp"
ssh $adressServer rm -R /var/www/html/loic-barthomeuf/*
ssh $adressServer tar -xzf /tmp/sources.tar.gzip -C /tmp/
ssh $adressServer cp -R /tmp/out/* /var/www/html/loic-barthomeuf
ssh $adressServer rm -R /tmp/out

# cd ./deploy
# copie du script à éxécuter
# scp config/apideployserver.sh $adressScript

# on le convertit :
# ssh $adressComputer dos2unix $localadressScript"/"apideployserver.sh
# on exécute le script
# ssh $adressComputer $localadressScript"/"apideployserver.sh
# on le supprime :
# ssh $adressComputer rm $localadressScript"/"apideployserver.sh

# cd ..
ssh $adressServer rm /tmp/sources.tar.gzip
rm sources.tar.gzip