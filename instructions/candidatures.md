# Candidatures personnalisées — Guide complet

## Principe

Pour chaque candidature, tu crées une page dédiée protégée par un code à 6 chiffres.
La page mélange lettre de motivation, matching profil/offre, benchmark entreprise et résumé CV ciblé.
Tu partages le lien + le code dans ton email de candidature.

---

## Workflow — De A à Z

### Étape 1 — Créer le fichier de données

Copie l'exemple et renomme-le avec le slug de l'entreprise (minuscules, tirets) :

```bash
cp data/acme-corp.json data/nom-entreprise.json
```

Exemples de slugs : `spotify`, `alan-sante`, `doctrine`, `pennylane`

---

### Étape 2 — Remplir le JSON

Ouvre `data/nom-entreprise.json` et remplis chaque champ :

```json
{
  "company": "Nom de l'entreprise affiché",
  "company_slug": "nom-entreprise",
  "job_title": "Intitulé exact du poste",
  "date": "25 février 2026",
  "code": "XXXXXX",
```

**Génère un code unique** (ouvre la console du navigateur) :
```javascript
Math.floor(100000 + Math.random() * 900000).toString()
// → ex : "382947"
```

---

### Structure complète du JSON

#### `letter` — Lettre de motivation

```json
"letter": {
  "hook": "Phrase d'accroche percutante (1-2 lignes, spécifique à l'entreprise)",
  "body": "<p>Paragraphe 1...</p><p>Paragraphe 2...</p><p>Paragraphe 3...</p>"
}
```

- `hook` : texte brut, visible en citation orange
- `body` : HTML avec balises `<p>`, `<strong>` autorisées — 2 à 4 paragraphes

---

#### `matching` — Correspondance profil/offre

```json
"matching": {
  "score": 80,
  "total": 5,
  "matched": 4,
  "rows": [
    {
      "expected": "Ce que l'offre demande",
      "provided": "Ce que tu apportes concrètement"
    }
  ]
}
```

- `score` : pourcentage entier (ex: 80)
- `total` : nombre total de critères listés
- `matched` : nombre de critères pleinement couverts
- `rows` : 4 à 6 lignes recommandées
- Ajoute `"partial": true` sur une ligne si tu couvres partiellement un critère (texte en italique)

---

#### `benchmark` — Lecture de l'entreprise

```json
"benchmark": {
  "challenges": {
    "title": "Titre court de la card (ex: Enjeux produit)",
    "content": "Ton analyse des enjeux produit actuels de l'entreprise (3-5 lignes)"
  },
  "news": {
    "title": "Titre court (ex: Actualités récentes)",
    "content": "Actualité récente que tu as repérée et comment tu la relis à ta candidature"
  }
}
```

Sources à consulter : offre d'emploi, LinkedIn entreprise, Maddyness/Frenchweb, Crunchbase, Product Hunt

---

#### `cv` — Expériences et compétences ciblées

```json
"cv": {
  "jobs": [
    {
      "title": "Intitulé du poste",
      "period": "Janv. 2021 → aujourd'hui · 4 ans",
      "company": "Entreprise · Ville",
      "tagline": "Courte description du contexte",
      "items": [
        "Point clé 1 — <strong>avec chiffre si possible</strong>",
        "Point clé 2",
        "Point clé 3 (2 à 4 points max)"
      ]
    }
  ],
  "skills": ["Skill 1", "Skill 2", "Skill 3"]
}
```

- Sélectionne **1 ou 2 postes** les plus pertinents pour ce poste
- Les skills doivent correspondre aux mots-clés de l'offre
- HTML autorisé dans `items` : `<strong>`

---

### Étape 3 — Générer la page

```bash
node gen.js nom-entreprise
```

Le terminal affiche :
- Le lien à envoyer au recruteur
- Le lien admin pour vérifier
- Le code à insérer dans l'email

---

### Étape 4 — Vérifier la page

Ouvre le lien admin dans ton navigateur :
```
candidatures/nom-entreprise.html?admin=1
```

Entre le code pour déverrouiller et vérifie :
- Le splash screen s'affiche correctement
- L'animation de révélation fonctionne
- Les 4 sections sont bien remplies
- Le responsive mobile est correct

---

### Étape 5 — Déployer

```bash
bash push.sh
# ou
bash quick-push.sh
```

La page est live sur GitHub Pages ~30 secondes après le push.

---

### Étape 6 — Envoyer au recruteur

Dans ton email de candidature, inclus :

> "J'ai préparé une page personnalisée pour cette candidature :
> [lien]
> Code d'accès : XXXXXX"

---

## Structure des fichiers

```
data/
  acme-corp.json          ← Exemple de référence
  nom-entreprise.json     ← Tes fichiers (1 par candidature)

candidatures/
  _template.html          ← Ne pas modifier directement
  acme-corp.html          ← Généré automatiquement
  nom-entreprise.html     ← Généré automatiquement
  robots.txt              ← Exclut le dossier des moteurs de recherche

gen.js                    ← Script de génération (ne pas modifier)
```

---

## Sécurité

| Mécanisme | Description |
|---|---|
| Code 6 chiffres | Hardcodé dans le HTML, communiqué dans l'email |
| 3 tentatives max | Après 3 échecs : verrouillage 5 minutes |
| Session persistante | Pas de re-saisie si rechargement de la page |
| Non indexé | `robots.txt` + `<meta name="robots" content="noindex">` |
| Non lié | Aucun lien depuis le portfolio → non trouvable par hasard |

> **Note** : la protection est côté client (JavaScript). Elle filtre les accès accidentels
> et non-invités, mais ne protège pas contre quelqu'un qui lirait le code source.
> C'est suffisant pour l'usage visé.

---

## Personnalisation avancée

### Modifier le domaine dans les liens générés

Dans `gen.js`, ligne ~61 :
```javascript
const BASE_URL = 'https://laurent-stp95.github.io/my-landing-page-profile';
```
Remplace par ton domaine custom si tu en as un (ex: `https://ldb.pm`).

### Ajouter une troisième card benchmark

Dans `data/xxx.json`, ajoute un champ `insights` dans `benchmark`,
puis modifie `candidatures/_template.html` et régénère avec `gen.js`.

### Changer la durée de verrouillage

Dans `js/candidature.js`, ligne ~10 :
```javascript
const LOCK_DURATION = 5 * 60 * 1000; // 5 minutes
```

---

## Référence rapide

```bash
# Nouvelle candidature
cp data/acme-corp.json data/SLUG.json
# → Remplir le JSON
node gen.js SLUG
# → Vérifier dans le navigateur
bash quick-push.sh
```
