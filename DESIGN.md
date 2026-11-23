---
name: CPE102 Viewbook
description: A 16-week course archive set as a sports-day colour-house programme.
colors:
  house-red: "#D7352A"
  house-blue: "#2563EB"
  house-green: "#1B7F36"
  house-yellow: "#F5C518"
  house-orange: "#F57C1F"
  house-gray: "#6B6F78"
  house-red-night: "#C9352B"
  house-blue-night: "#2F64DB"
  house-green-night: "#1E8541"
  house-yellow-night: "#F2C230"
  house-orange-night: "#F2852F"
  house-gray-night: "#4F535C"
  on-house-light: "#FFFFFF"
  on-house-dark: "#15161A"
  ground: "#FFFFFF"
  panel: "#F1F1EE"
  ink: "#15161A"
  ink-soft: "#4A4D55"
  rule: "#DCDCD7"
  ground-night: "#101114"
  panel-night: "#1B1C21"
  ink-night: "#F2F2EF"
  ink-soft-night: "#ABADB4"
  rule-night: "#2C2E35"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 5.9vw, 5.6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 118"
  numeral:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.75rem, 4.8vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 4.4vw, 3.75rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(1.3rem, 2vw, 1.75rem)"
    fontWeight: 800
    lineHeight: 1.1
    fontVariation: "'wdth' 105"
  body:
    fontFamily: "Source Sans 3, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
    letterSpacing: "0.06em"
rounded:
  tag: "2px"
  tile: "4px"
  sheet: "6px"
  round: "50%"
spacing:
  gutter: "10px"
  page-pad: "clamp(16px, 3vw, 32px)"
  section: "clamp(64px, 9vw, 120px)"
components:
  tile-house:
    backgroundColor: "{colors.house-green}"
    textColor: "{colors.on-house-light}"
    rounded: "{rounded.tile}"
    padding: "clamp(18px, 2vw, 28px)"
  tile-neutral:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "clamp(18px, 2vw, 28px)"
  tile-cta:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.tile}"
    typography: "{typography.title}"
  week-number:
    backgroundColor: "{colors.house-blue}"
    textColor: "{colors.on-house-light}"
    rounded: "{rounded.tile}"
    padding: "12px 14px"
    width: "112px"
  filter-button:
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "9px 16px"
  filter-button-active:
    backgroundColor: "{colors.house-blue}"
    textColor: "{colors.on-house-light}"
    rounded: "{rounded.tag}"
    padding: "9px 16px"
  marker:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "6px 12px"
    typography: "{typography.label}"
  tag:
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "3px 10px"
  doc-link:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "12px 16px"
  icon-button:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.round}"
    size: "40px"
---

# Design System: CPE102 Viewbook

## Overview

**Creative North Star: "The Colour-House Programme"**

The viewbook reads like the printed programme of a school sports day. The six CPE102 houses (Red, Blue, Green, Yellow, Orange, Gray) are flat, full-strength fields that own whole tiles, rows and sheets. Every week, member and project belongs to a house, and that house colour is how the reader recognises it. The team's own house is Green, so Green carries the cover and the midterm project.

Density is programme-like: a tight bento of square-cornered tiles on 10px gutters, heavy expanded numerals that read as a scoreboard, and plain reading text set calmly between them. Colour is never decoration on top of a neutral layout; the colour is the layout. Ink rules (3px under section heads, 2px between week rows) do the structural work that cards and shadows would do elsewhere.

The world rejects the dark glass developer portfolio it replaced and the white card grid: no gradients, no glass, no glow, no drop shadows.

**Key Characteristics:**
- Six flat house fields, painted through a single `--house` / `--on-house` pair.
- Square-ish shapes: 4px tiles, 2px tags, no pills.
- Archivo expanded black for numerals, headings and labels; Source Sans 3 for reading.
- Light and dark themes of equal standing; dark keeps the fields vivid on a deep ink ground.
- Structure from ink rules and gutters, never from shadows.

## Colors

Six saturated house colours on a white (or deep ink) ground, with a small neutral set doing everything else.

### Primary
- **Programme Green** (house-green / house-green-night): the team's house. The cover title tile, Project 01, and any element that speaks for the team. Light green was darkened from the sketch's brighter green so white text holds on it; dark mode lifts it so the field stays vivid against the night ground.

### Secondary
- **Signal Red** (house-red): stat tiles and weeks assigned to Red.
- **Track Blue** (house-blue): stat tiles and the focus ring colour.
- **Medal Yellow** (house-yellow): stat tiles and weeks assigned to Yellow; also the text-selection colour. Takes dark text.
- **Relay Orange** (house-orange): the room tile, Project 02 (KMUTT AR Campus Map) and Orange weeks. Takes dark text.
- **Bench Gray** (house-gray): the "all weeks" house and the scrollbar thumb.

### Neutral
- **Paper White** (ground) / **Night Ground** (ground-night): page background.
- **Programme Panel** (panel / panel-night): neutral tiles, embed and image placeholders, doc links, icon buttons.
- **Programme Ink** (ink / ink-night): text, section-head rules, and the inverted CTA tile and footer (the CTA swaps ink and ground per theme).
- **Soft Ink** (ink-soft / ink-soft-night): dates, previews, captions, secondary lines.
- **Hairline** (rule / rule-night): masthead divider, tag and card outlines, unfilled week rules.

### Named Rules
**The House Pair Rule.** A house colour is never applied alone. Any element painted from a house sets both `--house` and `--on-house` (via an `.h-<house>` class) and uses them together: field and text, or inverted (text-coloured chip on a field) on hover. White text goes on Red, Blue, Green and Gray; dark ink on Yellow and Orange.

**The Flat Field Rule.** House colours are applied at full strength as solid fills. No tints, gradients, transparency or glow on a house field. The only translucent fills are the photo-caption shade and the pipeline steps inside a house tile.

**The Two-Ground Rule.** Each theme defines its own house values; dark mode lifts the houses slightly rather than dimming them, so the fields stay as loud on the night ground as on paper. Any new house-coloured text must clear 4.5:1 in both themes, not only in light.

## Typography

**Display Font:** Archivo (variable width 62–125, weight 400–900), with Arial Narrow fallback
**Body Font:** Source Sans 3 (400/600/700), with Segoe UI fallback

**Character:** Archivo stretched wide and set black is the scoreboard: numerals, headings, labels and buttons. Source Sans 3 is the reading voice for the team's reflections and previews. No monospace anywhere; dates and codes are set in Archivo labels.

### Hierarchy
- **Numeral** (900, width 125%, clamp 2.75–4.5rem, line-height 0.9): stat tiles, week number chips (2.6rem), sheet number (clamp 4–6rem), grading total.
- **Display** (900, width 118%, clamp 3–5.6rem, line-height 0.9, -0.03em): the cover h1 only.
- **Headline** (900, width 112%, clamp 2–3.75rem, line-height 0.95): section heads; sheet and project headings sit at width 110–112% in the same family.
- **Title** (800, width 105%, clamp 1.3–1.75rem, line-height 1.1): week titles, reflection subheads, member names (900, width 118%).
- **Body** (400, 1.0625rem, line-height 1.55): reading text, capped at 62–68ch in previews and reflection lists.
- **Label** (700, 0.8–0.85rem, 0.06–0.1em tracking, often uppercase): markers, stat captions, dates, photo captions, fab labels, imprints.

### Named Rules
**The Width Means Weight Rule.** Expanded width (112–125%) is reserved for black-weight numerals and headings. Labels and small text drop back to 100% width.

**The Label Follows Rule.** Course labels and markers sit after the heading they belong to (beside it in the section head, or at the foot of a tile), never stacked above it as an eyebrow.

## Layout

A 1440px max container with fluid side padding (16–32px). The cover is a 12-column, 6-row bento filling the first viewport (640–860px tall); at 1100px it becomes 6 columns with auto rows, at 560px 2 columns with dense packing. Every grid in the system (bento, project grid, embeds, gallery, team, videos) uses the same 10px gutter. Sections open with 64–120px of top space and a section head: heading left, markers right, a 3px ink rule beneath.

The week archive is a list, not a grid: each row is a two-column line (112px number chip, text) that bleeds 16px past the section edge so its hover fill has room while content stays aligned to the heading. Rows carry no thumbnails; photos live in the week sheet. Below 860px the chip shrinks to 72px. The masthead is sticky at 64px; below 860px its nav wraps to a full-width scrolling row with a faded right edge.

## Elevation & Depth

Flat. There are no box shadows anywhere in the system. Depth comes from colour fields against the ground, ink rules, and the one true overlay: the week sheet as a modal dialog over a 72% ink backdrop. Hover is expressed as fill (a week row fills with its house) or a border shift to ink, never as lift.

### Named Rules
**The No-Lift Rule.** Nothing rises on hover. State changes repaint (fill, invert, border to ink) or nudge content (an arrow drops 4px, a thumbnail scales to 1.04 inside its clip).

## Shapes

Square-ish and printed. Tiles, chips, thumbnails, embeds and gallery images use a 4px radius; tags, markers, filter buttons, caption chips, grade segments and house-strip squares use 2px. The sheet uses 6px (square at phone width). The only round forms are 40px circular icon buttons (theme toggle, sheet navigation) and the 8px media dot. Outlines are 1px hairlines; structural rules are 2–3px.

## Components

### Tiles
Programme blocks that carry a whole field of house colour.
- **Corner Style:** 4px.
- **Background:** the element's house, or the panel colour when no house is set; text from `--on-house` or ink.
- **Internal Padding:** clamp(18px, 2vw, 28px) in the bento; up to 40px on project tiles.
- **Variants:** stat tile (numeral over an uppercase label, bottom-aligned), photo tile (full-bleed image with a 2px caption chip on a translucent ink shade), CTA tile (inverted ink, arrow drops 4px on hover).

### Week Row (signature)
The archive entry. A house-coloured square number chip (two-digit numeral over a small "WEEK" label), title, date line with a house-coloured media dot, preview and tags, divided by 2px rules.
- **Hover / Focus:** the whole row fills with its house colour; the number chip inverts (on-house field, house numeral); dates, previews and tag outlines take the row's text colour.

### KMUTT logo

The official orange KMUTT mark, cropped from `Public/KMUTT_Logo.png` to `media/brand/kmutt.webp` (128px tall, transparent background). It sits before "CPE102 // SEC C" in the masthead and at 26px at the start of the footer. Never recolour it; the orange reads on both the light and dark grounds.

### Week ticker

A full-bleed ink band (`--cta-bg`) between the cover and the archive, with every week title scrolling slowly from right to left (90s loop). Each entry is a "W01" label at 60% opacity, then the title, and a 10px house-coloured square separates the entries. Every entry links to its week.
- **Hover / Focus:** the band pauses, and the entry fills with its house colour (on-house text). House colours never appear as text on the band, because yellow and orange fail contrast on the light band in dark mode.
- **Reduced motion:** no animation. The duplicate track is hidden and the band scrolls by hand.
- **Open:** opening a week raises the sheet out of the clicked row (translate from the row's height plus scale 0.94 to 1, 0.42s ease-out, transform and opacity only), with the backdrop fading in. Iframes load only after the sheet settles. Closing reverses it in 0.2s. Changing the archive filter fades the list back in (0.35s). A page-wide view transition is used only for the theme crossfade.

### Filters (signature)
Each archive filter owns a house. Unselected: 2px house-coloured outline, 2px radius, transparent fill; hover fills with panel. Selected: solid house field. The active filter's house repaints the board, recolouring the section-head rule and every week-row divider (0.4s ease-out).

### Week Sheet
A modal dialog up to 1180px wide on the page ground. Its header is a full house field holding circular prev/next/close buttons (1px current-colour outline, inverting on hover), the huge sheet numeral, the headline, byline and date label. The body stacks embeds, two-column reflection lists under 3px ink rules, resource links and a gallery, all on the 10px gutter.

### Markers and Tags
- **Markers:** 2px-radius blocks in a house field or panel, uppercase 0.8rem Archivo label. Placed after the section heading.
- **Tags:** 2px radius, 1px hairline outline (current-colour on house fields), 0.85rem body text. Never pill-shaped.

### Navigation
Sticky masthead on the ground with a hairline bottom rule: the KMUTT logo (36px tall, 30px on phones) before an expanded black wordmark, six 12px house squares, Archivo 600 links whose 2px underline appears on hover, and a 40px circular theme toggle on panel.

### Member Card
A house-coloured tile with a 4:5 portrait on top, then name (900, width 118%), role and student ID label.

### Doc Link and Game Card
Panel-filled, 4px radius, 1px hairline outline that turns ink on hover, with stroke icons in current colour.

## Do's and Don'ts

### Do:
- **Do** paint every house element through an `.h-<house>` class so `--house` and `--on-house` arrive together.
- **Do** keep house fields flat and at full strength in both themes, with the per-theme house values.
- **Do** use the 10px gutter for every grid and the 4px / 2px radius pair for tiles and tags.
- **Do** set numerals and headings in Archivo black at 112–125% width, and reading text in Source Sans 3.
- **Do** express state by repainting (house fill, inversion, ink border), and give any new archive filter its own house.
- **Do** place course labels after the heading they belong to.

### Don't:
- **Don't** use gradients, glass, glow or blurred backdrops on house fields or tiles.
- **Don't** add box shadows or hover lift; the system is flat.
- **Don't** use pill-shaped tags or buttons; tags and filters are 2px-square.
- **Don't** introduce monospace type.
- **Don't** stack an eyebrow label above a heading.
- **Don't** put white text on Yellow or Orange, or dark text on Red, Blue, Green or Gray.
