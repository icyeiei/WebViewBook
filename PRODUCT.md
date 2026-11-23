# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML, CSS, and vanilla JavaScript. No framework, no Tailwind, no build step. A teammate must be able to open and read every file, so CSS is hand-written and properly indented. Deployed to Vercel or Netlify.

## Users

The CPE102 instructor and TAs who grade the submission, and the four team members (Huffle, Ice, Nyan, P) who wrote it. The viewbook is a required course submission (15% of the grade) for CPE102 Engineering Exploration, KMUTT Computer Engineering, Semester 1/2026, Section C (Inter A).

## Product Purpose

An archive of what the team learned, week by week, across the 16-week semester: topics covered, what each member understood, the two major projects, and the evidence (photos, decks, videos, games, reports). Success means a reader can move through any week and see what was learned and what was made.

## Positioning

Built from the team's own material: their photos from every session, their Era-One robot and its six drafts, their two itch.io games, their final-project AR campus map. Nothing here is generic course copy.

## Operating Context

Read on a laptop by graders, often week by week, alongside the course's grading criteria (What I Learned / What I Understood / Review at Home per week). Embedded media: YouTube (Week 1), Canva decks (Weeks 2, 8, 13, final project), a PDF report (Week 8), itch.io game links (Week 10), an external site (Week 11), and the Week 8 robot videos.

## Capabilities and Constraints

- Existing copy in `data.js` and `index.html` stays as written. Do not rewrite text content.
- Removed as personal/generic: the "Reviewed n / 48" progress counter and the per-week self-check checkbox UI.
- Light and dark themes, switched by a toggle.
- All media must be viewable once deployed. Raw assets are large (4K HEVC videos up to ~120 MB), so web-ready copies are required.
- `assets/Reference and others/Detail.pdf` is the team's own source notes, not site content.

## Brand Commitments

- CPE102 colors: Red, Blue, Green, Yellow, Orange, Gray (the course's color houses; this team is Green).
- The team likes the bento-grid composition of the original hero, but is open to new layouts.

## Evidence on Hand

- Week photos: `assets/Week1` to `assets/Week9`, `assets/week8`, `assets/week10`, `assets/Week13`.
- Member portraits and role chart: `assets/Reference and others/Member/`.
- Era-One progress report PDF and three competition videos: `assets/week8/`.
- Week 12 lab PDFs: `assets/Week12/`.
- Lecture slides: `slides/`.
- Games: Rhythm Clash and Split Paths on itch.io.

## Product Principles

1. Evidence over decoration: every week shows what was actually made or photographed.
2. The text is the team's; design serves it without rewriting it.
3. Readable code is part of the deliverable.
4. Nothing broken: every image, embed, and video must load when deployed.
