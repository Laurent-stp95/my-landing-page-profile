# Guide pour pousser vos modifications sur GitHub

## 🚀 Méthode la plus simple : Utilisez les scripts !

Deux scripts sont disponibles à la racine du projet :

### Script complet (recommandé)
```bash
./push.sh "votre message de commit"
```
Ce script gère automatiquement tout : vérifications, pull, merge, push.

### Script rapide
```bash
./quick-push.sh "votre message"
```
Pour les push rapides sans vérifications supplémentaires.

---

## Workflow simple (cas standard)

```bash
# 1. Vérifier l'état de vos fichiers
git status

# 2. Ajouter vos modifications
git add .

# 3. Créer un commit avec un message descriptif
git commit -m "description de vos changements"

# 4. Pousser vers GitHub
git push origin main
```

## Si vous avez des modifications locales ET distantes (branches divergentes)

C'est le cas quand vous avez fait des commits locaux ET que quelqu'un d'autre (ou vous sur un autre ordinateur) a poussé des commits sur GitHub.

```bash
# 1. Récupérer et fusionner les changements distants
git pull origin main --no-rebase

# 2. Résoudre les conflits si nécessaire (voir section ci-dessous)

# 3. Pousser vos modifications
git push origin main
```

## Commande tout-en-un (pour les cas simples)

Si vous savez qu'il n'y a pas de conflits potentiels :

```bash
git add . && git commit -m "votre message" && git push origin main
```

## En cas de conflits lors du pull

Si Git vous indique des conflits :

1. Ouvrez les fichiers en conflit (Git vous les indiquera)
2. Cherchez les marqueurs `<<<<<<<`, `=======`, et `>>>>>>>`
3. Choisissez quelle version garder ou combinez-les
4. Supprimez les marqueurs
5. Sauvegardez les fichiers
6. Ajoutez les fichiers résolus : `git add .`
7. Finalisez la fusion : `git commit -m "Merge remote changes"`
8. Poussez : `git push origin main`

## Vérifier l'historique

```bash
# Voir les derniers commits locaux
git log --oneline -5

# Voir les commits sur GitHub
git log origin/main --oneline -5

# Voir la différence entre local et distant
git log origin/main..HEAD
```

## Annuler des changements (avant le push)

```bash
# Annuler le dernier commit mais garder les modifications
git reset --soft HEAD~1

# Annuler les modifications d'un fichier non commité
git checkout -- nom_du_fichier

# Voir ce qui a changé avant de commiter
git diff
```

## Commandes utiles

```bash
# Voir l'état actuel
git status

# Voir ce qui a été modifié
git diff

# Voir l'historique
git log --oneline

# Récupérer les infos du distant sans fusionner
git fetch origin

# Synchroniser avec le distant
git pull origin main
```

## Bonnes pratiques

1. **Faites des commits fréquents** avec des messages clairs
2. **Pullez avant de pusher** pour éviter les conflits
3. **Testez votre code** avant de pousser
4. **Utilisez des messages de commit descriptifs** (ex: "Ajout du lien LinkedIn au profil" plutôt que "update")
5. **Vérifiez avec `git status`** avant chaque opération
