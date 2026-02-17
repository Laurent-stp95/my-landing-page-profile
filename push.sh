#!/bin/bash

# Script pour pousser facilement les modifications sur GitHub
# Usage: ./push.sh "message de commit"

# Couleurs pour les messages
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Script de push automatique${NC}\n"

# Vérifier s'il y a des changements
if [[ -z $(git status -s) ]]; then
    echo -e "${YELLOW}⚠️  Aucune modification à pousser${NC}"
    exit 0
fi

# Message de commit
if [ -z "$1" ]; then
    echo -e "${YELLOW}📝 Entrez un message de commit:${NC}"
    read -r COMMIT_MSG
else
    COMMIT_MSG="$1"
fi

if [ -z "$COMMIT_MSG" ]; then
    echo -e "${RED}❌ Le message de commit ne peut pas être vide${NC}"
    exit 1
fi

# Afficher les fichiers modifiés
echo -e "\n${YELLOW}📋 Fichiers modifiés:${NC}"
git status -s

# Ajouter tous les fichiers
echo -e "\n${GREEN}➕ Ajout des fichiers...${NC}"
git add .

# Créer le commit
echo -e "${GREEN}💾 Création du commit...${NC}"
git commit -m "$COMMIT_MSG"

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Échec du commit${NC}"
    exit 1
fi

# Récupérer les changements distants
echo -e "\n${GREEN}🔄 Synchronisation avec GitHub...${NC}"
git fetch origin

# Vérifier si la branche distante existe et si elle a divergé
BRANCH=$(git branch --show-current)
if git show-ref --verify --quiet refs/remotes/origin/$BRANCH; then
    LOCAL=$(git rev-parse @)
    REMOTE=$(git rev-parse @{u})

    if [ $LOCAL != $REMOTE ]; then
        echo -e "${YELLOW}⚠️  La branche distante a des changements. Fusion en cours...${NC}"
        git pull origin $BRANCH --no-rebase

        if [ $? -ne 0 ]; then
            echo -e "${RED}❌ Conflit détecté ! Résolvez les conflits manuellement puis exécutez:${NC}"
            echo -e "${YELLOW}git add . && git commit -m 'Merge' && git push origin $BRANCH${NC}"
            exit 1
        fi
    fi
fi

# Pousser vers GitHub
echo -e "\n${GREEN}⬆️  Push vers GitHub...${NC}"
git push origin $BRANCH

if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}✅ Modifications poussées avec succès sur GitHub !${NC}"
else
    echo -e "\n${RED}❌ Échec du push${NC}"
    exit 1
fi
