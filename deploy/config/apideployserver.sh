#!/bin/bash
localisationServeur="/var/www/loic-barthomeuf"

# On efface les sources front précédentes sauf node_modules et package-lock.json :
cd $localisationServeur"/sources"
for file in *; do
   [[ "$file" != 'node_modules' ]] && [[ "$file" != 'package-lock.json' ]] && [[ "$file" != '.next' ]] && rm -r "$file"
done
cd ..

# On extrait tout dans le dossier sources :
gunzip $localisationServeur"/sources.tar.gz"
tar -xf $localisationServeur"/sources.tar" -C $localisationServeur"/sources"
rm $localisationServeur"/sources.tar"

cd sources
npm install
npm run build
pm2 restart npm --update-env

