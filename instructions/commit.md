
C'est tout. Après ça, pour les modifs suivantes ce sera simplement :

git add .
git commit -m "description du changement"
git push

Si ton repo GitHub a été créé avec un README ou un .gitignore, il faudra d'abord pull avant de push :
git pull origin main --allow-unrelated-histories