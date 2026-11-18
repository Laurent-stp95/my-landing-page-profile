# ldb.pm — Laurent Del Braccio, Product Builder

Site personnel : accueil (à propos, projets, compétences, contact) et parcours présenté en « notes de version ».

En ligne : https://laurent-stp95.github.io/my-landing-page-profile/

## Stack

- HTML / CSS / JS, sans framework ni build
- Un fichier CSS par section (`css/`), les jetons de design dans `css/variables.css`
- Publié par GitHub Pages depuis la branche `main`
- Mesure d'audience : GoatCounter (sans cookies)

## Lancer le site en local

```bash
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000. La page `404.html` ne s'affiche qu'en ligne (le serveur local montre sa propre erreur) ; pour la voir en local : http://localhost:8000/404.html

## Structure

```
├── index.html          accueil
├── cv.html             parcours (notes de version)
├── 404.html            page introuvable (styles intégrés)
├── css/                un fichier par section + variables.css
├── js/                 nav, hero, terminal, scroll-reveal, release-notes
├── assets/             image de partage, icônes
├── favicon.svg
├── site.webmanifest
├── PRODUCT.md          contexte produit (utilisé par impeccable)
└── instructions/       guides git (push, commit)
```
