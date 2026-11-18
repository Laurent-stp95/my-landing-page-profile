---
name: ldb.pm
description: Site personnel de Laurent Del Braccio, Product Builder — sobre, précis, écrit comme un produit livré.
colors:
  ground: "#fbfbfd"
  surface: "#f5f5f7"
  ink: "#1d1d1f"
  ink-muted: "#515154"
  ink-subtle: "#6e6e73"
  release-blue: "#0071e3"
  release-blue-text: "#005bb8"
  release-blue-solid: "#0066cc"
  release-blue-solid-hover: "#0058b0"
  release-blue-wash: "rgba(0, 113, 227, 0.08)"
  on-accent: "#ffffff"
  hairline: "#d2d2d7"
  hairline-soft: "#e8e8ed"
  hairline-strong: "#c7c7cc"
  surface-hover: "#ebebef"
  surface-active: "rgba(0, 0, 0, 0.06)"
  ground-dark: "#000000"
  surface-dark: "#1d1d1f"
  ink-dark: "#f5f5f7"
  ink-muted-dark: "#c7c7cc"
  ink-subtle-dark: "#a1a1a6"
  release-blue-dark: "#2997ff"
  release-blue-text-dark: "#4aa8ff"
  hairline-dark: "#38383a"
  hairline-soft-dark: "#2c2c2e"
  terminal: "#1d1d1f"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "clamp(3rem, 7vw, 6rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "clamp(2rem, 4.5vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.6rem, 2.8vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.3rem, 2.1vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.02em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  data:
    fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0em"
    fontFeature: "tnum"
rounded:
  sm: "4px"
  md: "8px"
  terminal: "18px"
  full: "9999px"
spacing:
  gutter: "6vw"
  gutter-mobile: "5vw"
  section: "6rem"
  section-mobile: "3.5rem"
  nav: "56px"
  nav-mobile: "52px"
components:
  button-primary:
    backgroundColor: "{colors.release-blue-solid}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.full}"
    padding: "0.7rem 1.5rem"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.release-blue-solid-hover}"
    textColor: "{colors.on-accent}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0.7rem 1.5rem"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "{colors.surface-hover}"
  nav-cta:
    backgroundColor: "{colors.release-blue-solid}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.full}"
    padding: "0 1rem"
    height: "34px"
  tag-shipped:
    backgroundColor: "{colors.release-blue-wash}"
    textColor: "{colors.release-blue-text}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 0.55rem"
    height: "1.5rem"
  tag-improved:
    backgroundColor: "{colors.surface-active}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0 0.55rem"
    height: "1.5rem"
  tag-learned:
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.sm}"
    padding: "0 0.55rem"
    height: "1.5rem"
  badge-current:
    backgroundColor: "{colors.release-blue-solid}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.full}"
    padding: "0 0.6rem"
    height: "1.5rem"
  text-link:
    textColor: "{colors.release-blue-text}"
    typography: "{typography.label}"
    height: "44px"
---

# Design System: ldb.pm

## Overview

**Creative North Star: "La note de version"**

Le site s'écrit comme un produit livré. Chaque page se lit comme une note de version bien tenue : factuelle, datée, mesurée. Ce qui a été construit passe devant, les effets restent derrière. Le système vient d'une base Apple (blanc profond, gris neutres, typographie système, un seul bleu) et la pousse vers la précision d'une documentation soignée : des filets fins au lieu de cartes, des chiffres exacts mis en avant, des dates et des numéros de version composés en mono comme des données.

L'ambiance visée est **précise**. Les alignements sont nets, chaque chiffre est réel et n'apparaît qu'une fois par ligne, la hiérarchie se fait par la taille et la graisse plutôt que par la couleur. La densité reste aérée : de grandes marges, des sections longues, une idée par bloc. Le mode sombre reprend exactement les mêmes rôles, avec des valeurs inversées.

Le mouvement est rare et signé : une seule animation pensée par section, toujours en sortie exponentielle, et rien quand l'utilisateur a demandé moins de mouvement.

**Key Characteristics:**
- Fond blanc profond, encre presque noire, un seul bleu pour l'action et le résultat.
- Séparation par filets de 1 px, jamais par cartes imbriquées ni par aplats décoratifs.
- Chiffres réels en grand, données (versions, dates) en mono à chasse fixe.
- Pages plates : une seule ombre dans tout le système, sous le terminal.
- Mouvement unique par section, courbe `cubic-bezier(0.16, 1, 0.3, 1)`, respect de `prefers-reduced-motion`.

## Colors

Une palette neutre et froide, portée par un unique bleu dont la rareté signale ce qui compte.

### Primary
- **Bleu de livraison** (release-blue) : le bleu de marque, utilisé pour les éléments graphiques sans texte blanc dessus : point de section actif dans la navigation, rail des étapes, indicateur du rail des versions. Sa variante **texte** (release-blue-text) colore les liens, le `.pm` du logo, les chiffres mis en avant dans les titres et les étiquettes « Livré » ; elle garde un contraste d'au moins 4,5:1 sur le fond et les surfaces. Sa variante **pleine** (release-blue-solid, survol release-blue-solid-hover) sert de fond aux boutons primaires, au bouton Contact et au badge « Version actuelle », avec du texte blanc (on-accent) à 5,6:1. Le **lavis** (release-blue-wash) est le fond des étiquettes « Livré ».

### Neutral
- **Blanc profond** (ground) : fond de toutes les pages.
- **Gris surface** (surface) : boutons secondaires, chips et zones légèrement détachées du fond ; survol en surface-hover.
- **Encre** (ink) : titres et texte principal.
- **Encre atténuée** (ink-muted, 7,5:1) : paragraphes secondaires, légendes de chiffres, accroches en deux tons.
- **Encre discrète** (ink-subtle, ≥ 4,5:1) : métadonnées, dates, scopes de projet, pied de page.
- **Filet** (hairline) : séparateurs principaux et bordure de la navigation ; **filet doux** (hairline-soft) entre les lignes d'une même liste ; **filet marqué** (hairline-strong) pour les soulignements de liens au repos.
- **Terminal** (terminal) : le fond du terminal du hero, sombre dans les deux modes.

### Mode sombre
Mêmes rôles, valeurs inversées : fond noir (ground-dark), surfaces gris anthracite (surface-dark), encres claires (ink-dark, ink-muted-dark, ink-subtle-dark), bleu éclairci pour rester lisible (release-blue-dark, release-blue-text-dark) et filets sombres (hairline-dark, hairline-soft-dark). Le fond des boutons pleins (release-blue-solid) reste identique dans les deux modes.

### Named Rules
**The One Blue Rule.** Une seule teinte d'accent sur tout le site. Le bleu marque une action, un lien, un état actif ou un résultat mesuré ; tout le reste est neutre. Si un écran contient plus de bleu que de texte d'encre, il y a trop de bleu.

**The Contrast Floor Rule.** Tout texte bleu utilise release-blue-text, jamais release-blue ; tout texte blanc pose sur release-blue-solid, jamais sur release-blue. Les deux variantes existent précisément pour tenir le AA.

## Typography

**Display Font:** pile système SF (SF Pro Display, avec Helvetica Neue, Helvetica et Arial en repli)
**Body Font:** pile système SF (SF Pro Text, mêmes replis)
**Label/Mono Font:** JetBrains Mono (avec ui-monospace et SFMono-Regular en repli), réservé aux données

**Character:** Une seule famille sans empattement, très resserrée sur les grands titres et neutre en texte courant. La mono n'apparaît que là où l'information est une donnée : elle donne à la page son ton de note de version sans la déguiser en écran de code.

### Hierarchy
- **Display** (600, clamp(3rem → 6rem), interligne 1,05, approche −0,03em) : le nom dans le hero et le titre « Notes de version ». Un seul par page.
- **Headline** (600, clamp(2rem → 3,25rem), 1,1, −0,025em) : titres de section. La seconde moitié peut passer en encre atténuée pour créer deux tons (« Un PM qui construit, *pas seulement qui pilote.* »).
- **Title** (600, clamp(1,6rem → 2,25rem), 1,15, −0,025em) : titres de projets et de la version actuelle. Le résultat qu'ils annoncent passe en bleu texte.
- **Lead** (600, clamp(1,3rem → 1,75rem), 1,35) : accroches de section en deux tons, première phrase en encre, suite en encre discrète. Mesure ≈ 34 caractères.
- **Body** (400, 1rem, 1,6) : paragraphes et preuves. Mesure 52 à 65 caractères ; `text-wrap: pretty` sur les paragraphes et les légendes, `balance` sur les titres.
- **Label** (500, 0,875rem) : scopes de projet, liens « Voir le détail », boutons de navigation.
- **Data** (mono 400, 0,8125rem, chiffres tabulaires) : numéros de version, dates, durées, contenu du terminal.

### Named Rules
**The Data in Mono Rule.** La mono est réservée aux données : versions, dates, durées, lignes du terminal. Jamais pour un titre, une accroche ou une étiquette décorative.

**The No Eyebrow Rule.** Aucun sur-titre ni label en petites capitales au-dessus d'un titre, et pas de numéro de section (01, 02…). Le titre porte seul son poids.

## Layout

Une colonne de lecture large, alignée à gauche, avec des marges latérales de 6vw (5vw sous 900 px) et des sections de 6rem de haut en bas (3,5rem sur mobile). Le contenu tient dans environ 1240 px sur l'accueil et 1100 px sur la page CV ; la navigation s'aligne sur ces mêmes bords. La navigation fixe fait 56 px (52 px sur mobile) et tous les ancrages en tiennent compte.

Les mises en page à deux colonnes sont asymétriques : projet (≈ 1,35fr) contre chiffres (≈ 1fr), Product contre Design & code, rail des versions (180 px) contre flux. Sous 900 px, tout s'empile en une colonne, les chiffres passent côte à côte sous le titre et le rail des versions disparaît. Points de rupture observés : 1024 px (hero empilé), 900 px (bascule principale), 768 px (boutons pleine largeur), 480 px (titres réduits).

Le rythme vertical suit une règle simple : plus d'espace au-dessus d'un titre qu'en dessous, des groupes serrés à l'intérieur et une séparation généreuse entre blocs.

## Elevation & Depth

Le système est plat. La profondeur vient des filets de 1 px, du contraste entre fond et surface, et du flou de la navigation une fois la page défilée (`backdrop-filter: saturate(180%) blur(20px)` sur un fond semi-opaque). Il n'existe qu'une seule ombre, sous le terminal du hero, qui en fait un objet posé sur la page.

### Shadow Vocabulary
- **Ombre d'objet** (`box-shadow: 0 30px 70px -25px rgba(0, 0, 0, 0.45)`) : uniquement le terminal du hero.

### Named Rules
**The Flat Page Rule.** Pas d'ombre sur les cartes, les boutons ni les sections. Si un élément doit se détacher, il change de surface ou gagne un filet ; il ne flotte pas.

**The Hairline Rule.** On sépare par des filets de 1 px (hairline entre blocs, hairline-soft entre lignes d'une liste), jamais par des cartes imbriquées. Les projets sont des lignes, pas des cartes.

## Shapes

Deux familles de formes. Les éléments d'action sont des pilules complètes (rayon 9999 px) : boutons, bouton Contact, badge « Version actuelle ». Les étiquettes de données sont presque carrées (rayon 4 px) : étiquettes Livré / Amélioré / Méthode, focus des liens. Les rayons de 8 px restent ponctuels (focus de la navigation, survols discrets), et le terminal seul porte un grand rayon de 18 px. Les marqueurs sont des cercles parfaits : point de section de 4 px, marqueurs du rail de 15 px avec contour de 2 px, le dernier plein.

## Components

### Buttons
Affirmés et calmes : une pilule pleine pour l'action principale, une pilule grise pour le reste.
- **Shape:** pilule complète (9999 px), hauteur minimale 44 px.
- **Primary:** fond bleu plein, texte blanc, padding 0,7rem × 1,5rem, graisse 500 ; icône facultative de 18 px à gauche.
- **Hover / Focus:** le fond fonce (release-blue-solid-hover) en 0,2 s ; focus visible par un contour de 2 px en bleu texte décalé de 3 px.
- **Secondary:** fond surface, texte encre, survol en surface-hover. Sur mobile, les boutons d'un même groupe passent en pleine largeur et s'empilent.

### Navigation
- **Barre :** fixe, transparente en haut de page, givrée avec un filet dès 8 px de défilement. Logo `ldb.pm` à gauche (le `.pm` en bleu texte), liens en label encre atténuée, bouton Contact en pilule compacte de 34 px.
- **Section active :** un unique point bleu de 4 px glisse sous le lien actif au défilement, et d'une page à l'autre grâce à la View Transition.
- **Mobile :** panneau plein écran, liens en titre (1,75rem, 600) séparés par des filets doux, apparition décalée de 40 ms par lien, Contact en bouton pleine largeur en bas, LinkedIn en lien secondaire. Le burger à deux traits devient une croix ; le reste de la page devient inerte et le focus reste dans le panneau.

### Release-note tags
Les types de changement d'une note de version : un rôle égale une couleur, toujours la même.
- **Livré :** lavis bleu, texte bleu texte.
- **Amélioré :** surface active, texte encre.
- **Méthode / Appris / Encadré :** sans fond, contour de 1 px en filet, texte encre atténuée.
- Hauteur 1,5rem, rayon 4 px, label 0,75rem graisse 600.

### Case rows (projets)
Une ligne par projet séparée par un filet : scope en encre discrète, titre qui annonce le résultat (le chiffre en bleu texte), contexte en une phrase, chiffres en grand (600, jusqu'à 2,5rem, chiffres tabulaires) dans une colonne à droite, puis un lien « Voir le détail » qui déplie Problème / Solution sur place (hauteur animée là où le navigateur le permet).

### Build flow rail (À propos)
Trois étapes reliées par un rail horizontal de 1 px ; au premier affichage, le rail se remplit en bleu de gauche à droite et chaque marqueur s'allume quand le remplissage l'atteint. Le dernier marqueur est plein. Sur mobile, le rail devient vertical, par segments.

### Release notes (page CV)
Version actuelle détaillée (badge « Version actuelle », titre, liste de changements typés avec chiffres), versions précédentes en une ligne (version en mono, titre, lieu, période), une seule dépliable. Sur desktop, un rail de versions collant suit la version visible avec un trait bleu de 2 px.

### Build terminal (hero)
Fenêtre sombre dans les deux modes (rayon 18 px, seule ombre du système), barre de titre avec trois pastilles, badge de phase en mono capitales. Les lignes se tapent à 18 ms par caractère : invite en blanc précédée d'un `$` bleu, sorties en gris, ligne finale validée d'une coche verte. L'animation se met en pause hors écran et s'affiche d'un bloc si le mouvement est réduit.

## Do's and Don'ts

### Do:
- **Do** réserver le bleu aux actions, liens, états actifs et résultats mesurés (The One Blue Rule).
- **Do** utiliser release-blue-text pour tout texte bleu et release-blue-solid sous tout texte blanc.
- **Do** séparer par des filets de 1 px et aligner chiffres et dates en chiffres tabulaires.
- **Do** composer les numéros de version, dates et durées en mono, et seulement eux.
- **Do** n'afficher que des chiffres réels, chacun une seule fois par ligne, avec sa légende.
- **Do** animer avec `cubic-bezier(0.16, 1, 0.3, 1)`, une seule animation pensée par section, et prévoir l'état final sous `prefers-reduced-motion`.
- **Do** garder des cibles d'au moins 44 px pour les actions et un contour de focus visible de 2 px.

### Don't:
- **Don't** empiler des cartes grises ni imbriquer des conteneurs : les projets et compétences sont des lignes.
- **Don't** ajouter de sur-titre, de label en petites capitales ou de numéro de section au-dessus d'un titre.
- **Don't** ajouter d'ombre hors du terminal, ni de dégradé sur du texte.
- **Don't** introduire une deuxième couleur d'accent ou une police d'affichage supplémentaire.
- **Don't** utiliser la mono comme costume « technique » pour des titres ou des étiquettes.
- **Don't** montrer de photo, de capture produit ou de témoignage inventés.
