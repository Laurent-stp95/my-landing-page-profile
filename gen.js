#!/usr/bin/env node
/* =============================================
   gen.js — Générateur de pages candidature
   Usage : node gen.js <company-slug>
   Exemple : node gen.js acme-corp
   ============================================= */

const fs   = require('fs');
const path = require('path');

// ── Arguments ────────────────────────────────────────────────
const slug = process.argv[2];

if (!slug) {
  console.error('\n❌  Usage : node gen.js <company-slug>');
  console.error('    Exemple : node gen.js acme-corp\n');
  process.exit(1);
}

// ── Chemins ──────────────────────────────────────────────────
const ROOT      = __dirname;
const dataFile  = path.join(ROOT, 'data', slug + '.json');
const template  = path.join(ROOT, 'candidatures', '_template.html');
const outputDir = path.join(ROOT, 'candidatures');
const outputFile = path.join(outputDir, slug + '.html');

// ── Vérifications ────────────────────────────────────────────
if (!fs.existsSync(dataFile)) {
  console.error(`\n❌  Fichier de données introuvable : data/${slug}.json`);
  console.error('    Créez ce fichier en vous basant sur data/acme-corp.json\n');
  process.exit(1);
}

if (!fs.existsSync(template)) {
  console.error('\n❌  Template introuvable : candidatures/_template.html\n');
  process.exit(1);
}

// ── Chargement ───────────────────────────────────────────────
let data;
try {
  data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
} catch (e) {
  console.error(`\n❌  Erreur de parsing JSON dans data/${slug}.json :`);
  console.error('    ' + e.message + '\n');
  process.exit(1);
}

let html = fs.readFileSync(template, 'utf8');

// ── Génération des blocs HTML ────────────────────────────────

// Lignes de matching
function buildMatchingRows(rows) {
  return rows.map((row, i) => {
    const isLast    = i === rows.length - 1;
    const isPartial = row.partial === true;
    const classes   = ['cand-match-row', isPartial ? 'partial' : ''].filter(Boolean).join(' ');
    return `        <div class="${classes}">
          <span class="cand-match-expected">${row.expected}</span>
          <span class="cand-match-arrow">→</span>
          <span class="cand-match-provided">${row.provided}</span>
        </div>`;
  }).join('\n');
}

// Blocs CV jobs
function buildCvJobs(jobs) {
  return jobs.map(job => {
    const items = job.items.map(item => `              <li>${item}</li>`).join('\n');
    return `        <div class="cv-job">
          <div class="cv-job-meta">
            <span class="cv-job-title">${job.title}</span>
            <span class="cv-job-period">${job.period}</span>
          </div>
          <p class="cv-job-company">${job.company}</p>
          <p class="cv-job-tagline">${job.tagline}</p>
          <ul class="cv-job-list">
${items}
          </ul>
        </div>`;
  }).join('\n\n');
}

// Tags skills
function buildSkillTags(skills) {
  return skills.map(skill => `          <span class="cv-tag">${skill}</span>`).join('\n');
}

// ── URL admin ────────────────────────────────────────────────
// Adapte selon ton domaine réel
const BASE_URL  = 'https://laurent-stp95.github.io/my-landing-page-profile';
const adminUrl  = `${BASE_URL}/candidatures/${slug}.html?admin=1`;
const shareUrl  = `${BASE_URL}/candidatures/${slug}.html`;

// ── Substitutions ────────────────────────────────────────────
const substitutions = {
  '{{COMPANY}}'                 : data.company,
  '{{COMPANY_SLUG}}'            : data.company_slug,
  '{{JOB_TITLE}}'               : data.job_title,
  '{{DATE}}'                    : data.date,
  '{{CODE}}'                    : String(data.code),
  '{{LETTER_HOOK}}'             : data.letter.hook,
  '{{LETTER_BODY}}'             : data.letter.body,
  '{{MATCH_SCORE}}'             : String(data.matching.score),
  '{{MATCH_TOTAL}}'             : String(data.matching.total),
  '{{MATCH_MATCHED}}'           : String(data.matching.matched),
  '{{MATCHING_ROWS}}'           : buildMatchingRows(data.matching.rows),
  '{{BENCH_CHALLENGES_TITLE}}'  : data.benchmark.challenges.title,
  '{{BENCH_CHALLENGES_CONTENT}}': data.benchmark.challenges.content,
  '{{BENCH_NEWS_TITLE}}'        : data.benchmark.news.title,
  '{{BENCH_NEWS_CONTENT}}'      : data.benchmark.news.content,
  '{{CV_JOBS}}'                 : buildCvJobs(data.cv.jobs),
  '{{CV_SKILLS}}'               : buildSkillTags(data.cv.skills),
  '{{ADMIN_URL}}'               : adminUrl,
};

// Appliquer les substitutions (toutes les occurrences)
for (const [placeholder, value] of Object.entries(substitutions)) {
  html = html.split(placeholder).join(value);
}

// ── Écriture ─────────────────────────────────────────────────
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, html, 'utf8');

// ── Résultat terminal ────────────────────────────────────────
console.log(`
✅  candidatures/${slug}.html générée avec succès
${'─'.repeat(52)}
  Entreprise  : ${data.company}
  Poste       : ${data.job_title}
  Date        : ${data.date}
  Code        : ${data.code}
${'─'.repeat(52)}
  🔗 Lien à envoyer :
     ${shareUrl}

  📋 Vérification admin :
     ${adminUrl}

  📧 Message à inclure dans l'email :
     "Accédez à ma candidature personnalisée avec le code : ${data.code}"
${'─'.repeat(52)}
`);
