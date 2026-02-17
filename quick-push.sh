#!/bin/bash

# Script de push rapide (sans vérifications)
# Usage: ./quick-push.sh "message de commit"

if [ -z "$1" ]; then
    echo "❌ Veuillez fournir un message de commit"
    echo "Usage: ./quick-push.sh \"votre message\""
    exit 1
fi

echo "🚀 Push rapide en cours..."

git add . && \
git commit -m "$1" && \
git pull origin main --no-rebase && \
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Push terminé avec succès !"
else
    echo "❌ Une erreur s'est produite"
    exit 1
fi
