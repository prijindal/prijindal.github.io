ng build -prod --aot && 
cd dist && 
git init && 
git add . && 
git commit -am 'Init commit' && 
git remote add origin git@github.com:prijindal/prijindal.github.io.git
git push origin master --force