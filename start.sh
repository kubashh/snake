git add .
git commit -m $1
git push

clear

cd frontend
npm run deploy -- -m "u"

cd ..
cd backend
node index.js