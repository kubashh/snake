clear

git add .
git commit -m $1
git push

cd frontend
npm run deploy -- -m "u"

cd ..
sh ./bstart.sh