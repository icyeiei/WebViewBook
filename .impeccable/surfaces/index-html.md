---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["app.js","style.css","data.js"]
---

# Surface: CPE102 viewbook (index.html)

Mode: Read. Graders and the team move through a 16-week archive, then the two projects and the team.
Constraints: copy in data.js / index.html unchanged; remove "Reviewed n/48" and the self-check checkbox UI (review lines stay as a plain list); light + dark toggle; plain HTML/CSS/JS, readable indented CSS; all media loads when deployed.
User steer: keep the colour-house programme, use less mono, don't let it go plain, dark theme must look as good as light.

## Direction contract

THESIS: The viewbook is a sports-day colour-house programme. The six CPE102 houses (Red, Blue, Green, Yellow, Orange, Gray) are flat full-strength fields that own whole tiles. It refuses the dark glass dev-portfolio and the white card grid.
OWN-WORLD: Flat house-colour fields, with no gradients, glass, or glow. Ink is #15161A on white in light mode; dark mode uses a deep ink ground with the same saturated fields (dimmed slightly). Archivo expanded/black for scoreboard numerals and headings; Source Sans 3 for reading text; mono only for dates and codes. Square tiles with 10px gutters, like a printed programme.
STORY: The reader sees the course at a glance (bento scoreboard), scans the 16 weeks as house-coloured entries, opens a week to read Learned / Understood / Review with its photos and media, then sees Era-One, the AR map, and the four members.
FIRST VIEWPORT: The mast has CPE102, a six-house chip strip, the nav, and the theme toggle. The bento is a 12-column grid. Green title tile at cols 1–6 × rows 1–4 (h1 at about 104px). Stat tiles in red, yellow, and blue. Two photo tiles (Era-One, Week 1). A grading strip tile. An orange room tile. An ink CTA tile reading "Explore 16-Week Archive".
FORM: Colour-House Programme, my pick (rank 1 on the grounded list; the roll assigned rank 6). seed:a724774b11984e62
Signature interaction: choosing a filter house recolours the week board; opening a week expands it into a full sheet in that week's house colour.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
