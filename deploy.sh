ng build -prod --aot && 
cd dist && 
git init && 
git add . && 
git config user.email $GH_EMAIL &&
git config user.name $GH_NAME && 
git commit -am 'Init commit' &&
git remote add origin $GH_REF &&
git push origin master --force