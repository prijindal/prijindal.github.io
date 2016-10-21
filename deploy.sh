ng build -prod --aot && 
cd dist && 
git init && 
git add . && 
git config user.email $GH_EMAIL &&
git config user.name $GH_NAME && 
git commit -am 'Init commit' &&
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:master > /dev/null 2>&1