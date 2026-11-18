---
name: ldb.pm
description: Site personnel de Laurent Del Braccio, Product Builder — toile blanche, encre noire, un seul indigo.
colors:
  canvas: "#ffffff"
  soft-panel: "#e2e2e2"
  ink: "#000000"
  graphite: "#595959"
  electric-indigo: "#4d49fc"
  electric-indigo-hover: "#3b37e6"
  on-accent: "#ffffff"
  ink-hover: "#2b2b2b"
  hairline: "#e2e2e2"
  hairline-soft: "#ededed"
  tint-lime: "#e4ff97"
  tint-lilac: "#c4baff"
  tint-aqua: "#c7f8fb"
  tint-blush: "#ffc9c1"
  text-on-tint: "#2b2b2b"
  terminal: "#1d1d1f"
  terminal-close: "#ff5c5f"
  terminal-minimize: "#fac800"
  terminal-maximize: "#34c759"
  terminal-success: "#30d158"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "clamp(3rem, 1.6rem + 4.6vw, 4.5rem)"
    fontWeight: 330
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontFeature: "kern"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3vw, 3.5rem)"
    fontWeight: 330
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 1.25rem + 1.6vw, 2.5rem)"
    fontWeight: 330
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 1rem + 1vw, 1.75rem)"
    fontWeight: 330
    lineHeight: 1.35
    letterSpacing: "-0.02em"
  subhead:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  body-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 520
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  small:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 480
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  meta:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0em"
  annotation:
    fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.04em"
    fontFeature: "tnum"
rounded:
  fine: "2px"
  small: "8px"
  card: "16px"
  pill: "9999px"
spacing:
  gutter: "max(6vw, (100% - 1200px) / 2)"
  gutter-mobile: "5vw"
  page-max: "1200px"
  section: "7.5rem"
  section-mobile: "3.5rem"
  nav: "64px"
  nav-mobile: "56px"
components:
  button-primary:
    backgroundColor: "{colors.electric-indigo}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.electric-indigo-hover}"
  button-ghost:
    textColor: "{colors.ink}"
    rounded: "{rounded.small}"
    padding: "8px 18px"
    height: "44px"
  button-ghost-hover:
    backgroundColor: "rgba(0, 0, 0, 0.05)"
  nav-pill:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "38px"
  nav-pill-hover:
    backgroundColor: "{colors.ink-hover}"
  tag-shipped:
    backgroundColor: "{colors.tint-lime}"
    textColor: "{colors.ink}"
    rounded: "{rounded.small}"
    padding: "0 0.6rem"
    height: "1.5rem"
  tag-improved:
    backgroundColor: "{colors.tint-aqua}"
    textColor: "{colors.ink}"
    rounded: "{rounded.small}"
    padding: "0 0.6rem"
    height: "1.5rem"
  tag-method:
    backgroundColor: "{colors.tint-lilac}"
    textColor: "{colors.ink}"
    rounded: "{rounded.small}"
    padding: "0 0.6rem"
    height: "1.5rem"
  tag-team:
    backgroundColor: "{colors.tint-blush}"
    textColor: "{colors.ink}"
    rounded: "{rounded.small}"
    padding: "0 0.6rem"
    height: "1.5rem"
  badge-current:
    backgroundColor: "{colors.electric-indigo}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.pill}"
    padding: "0 0.6rem"
    height: "1.5rem"
  metrics-card:
    backgroundColor: "{colors.tint-lime}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "1.75rem 2rem"
---

# Design System: ldb.pm

## Overview

**Creative North Star: "Le mur de galerie"**

Une toile blanche, de l'encre noire, et un seul projecteur indigo. L'interface s'efface pour que le travail parle : les titres sont très fins et sûrs d'eux, le texte courant est généreux (18 px), les actions sont des pilules. La couleur n'est jamais décorative dans l'interface ; elle apparaît là où il y a du contenu à montrer (les chiffres d'un projet, le type d'un changement, la phase d'un build), toujours en pastel et toujours sous du texte noir.

Cette direction a été choisie par Laurent à partir d'une analyse du style du site Figma. Le site en reprend la grammaire (toile blanche, accent unique, titres en graisse 330, pilules, une seule ombre, rythme de galerie) mais jamais les marques : pas de logo quatre couleurs, pas de police propriétaire, pas d'anneau décoratif. Le thème est clair uniquement.

Le rythme alterne de grandes bandes d'air (sections de 7,5rem) et des blocs serrés. Tout tient dans une colonne de 1200 px centrée. Le mouvement reste rare : une animation pensée par section, en sortie exponentielle, et rien quand l'utilisateur a demandé moins de mouvement.

**Key Characteristics:**
- Toile blanche (#ffffff), encre noire (#000000), un seul gris (graphite #595959).
- Un seul indigo électrique pour l'action principale de l'écran.
- Titres en Inter graisse 330 : l'autorité vient de la retenue, pas du gras.
- Pastels (vert anis, lilas, bleu glacier, rose poudré) réservés au contenu, avec du texte noir.
- Une seule ombre, sous le terminal du hero ; tout le reste est plat.
- Rayons en quatre crans : 2 / 8 / 16 / pilule.

## Colors

Une interface achromatique, avec un projecteur indigo et des pastels pour le contenu.

### Primary
- **Indigo électrique** (electric-indigo) : le fond du bouton principal de chaque écran (« Me contacter », « M'écrire », « Retour à l'accueil »), le badge « Version actuelle », le `.pm` du logo, le point de section dans la navigation, le rail des versions du CV et le dernier marqueur du rail « Je livre ». Contraste 5,7:1 sur blanc, en texte comme sous du texte blanc. Survol en electric-indigo-hover.

### Tertiary (pastels de contenu)
- **Vert anis** (tint-lime) : ce qui est livré. Étiquette « Livré », carte de chiffres du projet Inscription, phase « ship » du terminal, pastille de l'image de partage et de la page 404.
- **Lilas** (tint-lilac) : la méthode et l'apprentissage. Étiquettes « Méthode » / « Appris », carte du projet Présentiel, phase « discovery ».
- **Bleu glacier** (tint-aqua) : l'amélioration et le prototype. Étiquettes « Amélioré » / « Piloté », carte du projet SSO, phase « poc ».
- **Rose poudré** (tint-blush) : l'équipe et le design. Étiquette « Encadré », phase « design ».

Sur un pastel, le texte principal est noir et le texte secondaire est text-on-tint (≥ 7:1 sur les quatre teintes) ; les séparateurs internes utilisent un noir à 12 %.

### Neutral
- **Toile** (canvas) : fond de toutes les pages.
- **Encre** (ink) : titres, texte principal, contour des boutons fantômes, pilule de navigation, rail de la section À propos.
- **Graphite** (graphite) : texte secondaire, scopes, métadonnées. C'est le seul gris de texte (7:1).
- **Panneau doux** (soft-panel) : surface de repli rare.
- **Filets** (hairline, hairline-soft) : séparateurs entre blocs et entre lignes.
- **Terminal** : le fond du terminal du hero ; ses pastilles de fenêtre et sa coche verte sont les seules couleurs hors palette, tolérées parce qu'elles appartiennent à l'objet représenté.

### Named Rules
**The One Spotlight Rule.** Un seul bouton indigo par écran. L'indigo marque l'action principale ou un état actif ; jamais un titre, un chiffre, un lien de texte ou une décoration.

**The Content Carries Color Rule.** Les pastels habillent le contenu (chiffres d'un projet, type d'un changement, phase d'un build), jamais l'interface : ni bouton, ni navigation, ni fond de section. Toujours avec du texte noir.

**The No Brand Borrowing Rule.** On reprend la grammaire du style de référence, jamais ses marques : pas de cyan, vert et orange du logo Figma, pas d'anneau à dégradé conique, pas de police figmaSans.

## Typography

**Display Font:** Inter variable, hébergée sur le site (repli : polices système)
**Body Font:** Inter variable
**Label/Mono Font:** JetBrains Mono, hébergée sur le site, pour les annotations

**Character:** Une seule famille, très fine dans les grandes tailles et neutre en texte courant. La finesse est la signature : la hiérarchie se fait par la taille et l'espace, pas par le gras. La mono, légèrement espacée, sert d'annotation (versions, dates, phases), jamais de texte courant.

### Hierarchy
Onze rôles, chacun exposé en variable CSS `--fs-<rôle>` (et `--fw-light / regular / medium / strong` pour les graisses 330 / 400 / 480 / 520) dans `css/variables.css`. Les quatre plus grands sont fluides.

- **Display** (330, 3 → 4,5rem fluide, interligne 1,05) : ton nom dans le hero, « Notes de version ». Un seul par page.
- **Headline** (330, 2,5 → 3,5rem fluide, 1,1) : titres de section, titre de la 404. La seconde moitié peut passer en graphite (deux tons).
- **Title** (330, 1,75 → 2,5rem fluide, 1,15) : titres de projets et de version, chiffres de projet, sous-titre du hero, liens du menu mobile. Le résultat dans un titre ressort en graisse 520, pas en couleur.
- **Lead** (330, 1,375 → 1,75rem fluide, 1,35) : accroches de section en deux tons, verbes du rail.
- **Subhead** (400, 1,5rem) : titres de groupe, accroche du hero, signature du CV.
- **Body-lg** (520, 1,125rem) : noms de compétences, titres de lignes, chiffres en ligne.
- **Body** (400, 1,125rem, 1,6) : texte courant. Mesure 52 à 65 caractères.
- **Small** (400, 1rem) : preuves, légendes, texte secondaire.
- **Label** (480, 1rem) : navigation, boutons, liens d'action.
- **Meta** (400, 0,875rem) : mentions du pied de page, petites métadonnées.
- **Annotation** (mono 400, 0,75rem, espacement +0,04em, chiffres tabulaires) : versions, dates, étiquettes, badge de phase, texte du terminal.

### Named Rules
**The Whisper Weight Rule.** Les titres (display, headline, title, lead) sont en graisse 330. Aucun texte au-delà de 520, sauf les glyphes du terminal.

**The Sixteen Floor Rule.** Aucun texte de lecture sous 16 px. Les tailles 12 et 14 px sont réservées aux annotations mono et aux mentions.

**The Scale Only Rule.** Aucune taille ni graisse en dur : chaque `font-size` utilise `--fs-*` et chaque `font-weight` utilise `--fw-*`.

**The Tracking Range Rule.** Approche entre −0,02em (grands titres) et +0,05em (mono) ; rien au-delà.

## Layout

Une colonne de 1200 px centrée dans une toile fluide, avec une marge minimale de 6vw (5vw sous 900 px). Sections de 7,5rem de haut en bas, 3,5rem sur mobile. La navigation fixe fait 64 px (56 px sur mobile), sans filet ni ombre ; elle devient légèrement translucide et floutée dès que la page défile.

Les compositions à deux colonnes sont asymétriques : texte du projet à gauche, carte de chiffres pastel à droite ; Product contre Design & code ; rail des versions (180 px) contre flux du CV. Sous 900 px, tout s'empile, les chiffres d'un projet passent côte à côte dans leur carte, le rail des versions disparaît. Les titres, les sections et le contact sont alignés à gauche ; rien n'est centré sauf les boutons pleine largeur du mobile.

## Elevation & Depth

Le système est plat. La profondeur vient de l'air, du contraste de graisse et des cartes pastel posées à plat. Une seule ombre existe, sous le terminal du hero, qui joue le rôle de l'objet flottant.

### Shadow Vocabulary
- **Ombre flottante** (`box-shadow: 0 24px 70px 0 rgba(0, 0, 0, 0.1)`) : le terminal du hero uniquement.

### Named Rules
**The Single Float Rule.** Une seule ombre sur tout le site, sous le terminal. Les cartes pastel, les boutons et les sections restent plats.

## Shapes

Quatre crans de rayon, sans mélange : 2 px pour les détails fins (focus des liens), 8 px pour les boutons fantômes et les étiquettes, 16 px pour les cartes (chiffres de projet, terminal), pilule pour les actions principales, la pilule de navigation, les badges et le badge de phase. Les marqueurs sont des cercles parfaits : point de navigation de 4 px, marqueurs du rail de 15 px.

## Components

### Buttons
- **Principal :** pilule indigo, texte blanc, graisse 480, 16 px, padding 10 × 20 px, hauteur minimale 44 px. Survol plus sombre. Un seul par écran.
- **Fantôme :** fond transparent, contour noir de 1 px, coins de 8 px, graisse 400, padding 8 × 18 px. Survol : voile noir à 5 %. C'est l'alternative à tout bouton principal ; jamais de fond coloré.
- **Pilule de navigation (Contact) :** fond noir, texte blanc, pilule de 38 px.
- **Focus :** contour indigo de 2 px décalé de 3 px.

### Navigation
- **Barre :** 64 px, blanche, sans filet. Logo `ldb.pm` à gauche (`.pm` en indigo), liens en label graphite, Contact en pilule noire.
- **Section active :** un unique point indigo de 4 px glisse sous le lien actif, au défilement et d'une page à l'autre (View Transition).
- **Mobile :** panneau plein écran blanc, liens en title, Contact en pilule pleine largeur, LinkedIn en lien secondaire ; le burger devient une croix, le reste de la page devient inerte.

### Metrics card (projets)
Les chiffres de chaque projet sont posés sur une carte pastel de 16 px de rayon, sans ombre : vert anis, lilas puis bleu glacier dans l'ordre des projets. Valeurs en title graisse 330, légendes en small text-on-tint, séparateurs noirs à 12 %.

### Release-note tags (CV)
Un type de changement égale un pastel : Livré (vert anis), Amélioré et Piloté (bleu glacier), Méthode et Appris (lilas), Encadré (rose poudré). Coins de 8 px, hauteur 1,5rem, texte noir 12 px graisse 480.

### Build terminal (hero)
Fenêtre sombre de 16 px de rayon, seule ombre du système. Badge de phase en pilule pastel, en mono majuscule légèrement espacée, dont la couleur suit l'étape : discovery (lilas), design (rose poudré), poc (bleu glacier), ship (vert anis). L'animation se met en pause hors écran.

### Build flow rail (À propos)
Trois étapes reliées par un rail noir qui se remplit de gauche à droite à l'apparition ; marqueurs à contour noir, le dernier plein et indigo.

### Release notes (CV)
Version actuelle avec badge indigo, titre en title graisse 330, changements typés par étiquettes pastel ; versions précédentes en une ligne avec la version en annotation mono ; rail des versions collant avec un trait indigo de 2 px.

## Do's and Don'ts

### Do:
- **Do** garder un seul bouton indigo par écran et des boutons fantômes noirs pour le reste.
- **Do** composer les titres en Inter graisse 330 et faire ressortir un résultat par la graisse 520.
- **Do** mettre la couleur sur le contenu : carte de chiffres, étiquette, phase, toujours en pastel avec du texte noir.
- **Do** respecter les quatre rayons (2 / 8 / 16 / pilule) et l'unique ombre du terminal.
- **Do** écrire les annotations (versions, dates, phases) en JetBrains Mono 12 px espacée de +0,04em.
- **Do** garder le texte de lecture à 16 px minimum et les cibles d'action à 44 px.

### Don't:
- **Don't** colorer un titre, un chiffre ou un lien de texte en indigo.
- **Don't** mettre un fond coloré sur un bouton secondaire, ni un pastel sur un bouton ou dans la navigation.
- **Don't** ajouter une ombre aux cartes, ni un dégradé où que ce soit.
- **Don't** dépasser la graisse 520 dans le texte, ni passer sous −0,02em d'approche.
- **Don't** reprendre les marques de Figma : logo quatre couleurs, cyan / vert / orange, anneau conique, figmaSans.
- **Don't** réintroduire un mode sombre sans une décision explicite.
