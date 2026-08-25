# Universal Conic \& Curve Generator

A physical instrument — four modules plus a bonus attachment set — that draws any conic
section by eccentricity: **circle, ellipse, parabola, hyperbola, and a pair of crossing
lines.** Turn the same idea a little further and it also draws a **sine wave, cycloid,
cardioid, Archimedean spiral, helix, and spiralling helix.**

[**▶ Try the live demo**](https://SKJainDr.github.io/mech-curve-generator/demo/conic_curve_generator_demo.html) ·
[Core blueprint (Modules 1–4)](blueprints/conic_generator_build_blueprint.svg) ·
[Bonus Module C blueprint](blueprints/module_c_bonus_attachments_blueprint.svg) ·
[GitHub Pages site](https://SKJainDr.github.io/mech-curve-generator/)

<img src="assets/hero.svg" alt="A strip of all eleven curves the instrument draws, one line each" width="100%">

> Replace `YOUR-USERNAME`/`YOUR-REPO` above once this is pushed, or delete the links you don't need.

\---

## What this is

Every conic section — circle, ellipse, parabola, hyperbola — is the same underlying curve,
distinguished by a single number: **eccentricity**. This project builds that idea into an
actual mechanical instrument, starting from the classic "circles can draw a straight line"
trick (the **Tusi couple**), which turns out to be mathematically identical to a much older
drafting tool, the **Trammel of Archimedes**.

From there the instrument grows into four interchangeable modules — one per required conic,
plus a fifth for the pair-of-lines degenerate case — sharing one visual and mechanical
language (M6 hardware, 6mm ply, the same pen-and-thread logic). A bonus module reuses the
same rolling-circle idea to add six more classic curves.

This repo contains three things:

1. **Build blueprints** — true-to-scale (1 SVG unit = 1mm), dimensioned cutting templates
with a full bill of materials, so you can build the physical instrument.
2. **An interactive HTML demo** — a browser-based simulation of the same mechanisms, with a
guided tour that draws all eleven curves in sequence, and a manual mode to drive any one
of them yourself.
3. **This landing page** (`index.html`) — a GitHub Pages front door tying both together.

## Repo layout

```
.
├── index.html                                    # GitHub Pages landing page
├── README.md                                     # this file
├── favicon.ico                                   # multi-res favicon (16/32/48)
├── site.webmanifest                              # enables "Add to desktop/home screen" with the app icon
├── assets/
│   ├── hero.svg                                  # generated banner (all 11 curves)
│   ├── og-image.png                              # social share preview image
│   ├── logo.svg                                  # full brand mark (detailed)
│   ├── logo-simple.svg                           # simplified mark used for small favicons
│   └── icons/
│       ├── icon-16.png, icon-32.png, icon-48.png # favicon sizes
│       ├── apple-touch-icon.png                  # 180×180, iOS home screen
│       ├── icon-192.png, icon-512.png            # Android/desktop PWA icons
├── demo/
│   └── conic\_curve\_generator\_demo.html            # standalone interactive demo (open directly, no server needed)
└── blueprints/
    ├── conic\_generator\_build\_blueprint.svg        # Modules 1–4: the five required conics
    └── module\_c\_bonus\_attachments\_blueprint.svg   # Module C: rolling disc + spiral arm
```

## Logo & icons

The brand mark is a trammel-style ellipse: two foci joined by a taut construction line, with
the pen point riding the curve — the same idea the physical instrument is built on. `assets/logo.svg`
is the full detail version used in the page header; `assets/logo-simple.svg` is a bolder cutdown
used to generate the favicon so it stays legible at 16px. `site.webmanifest` registers `icon-192.png`
and `icon-512.png` so browsers use the mark when someone adds the site to their desktop or phone
home screen. If you rename the repo, update `start_url`/`scope` in `site.webmanifest` to match.

Everything is static — no build step, no dependencies. `index.html` and everything under
`demo/` and `blueprints/` can be opened directly from disk or served as-is by GitHub Pages
from the repo root (**Settings → Pages → Deploy from branch → `/ (root)`**).

## The five required conics

|Module|Mechanism|Draws|Parameter|
|-|-|-|-|
|1|Elliptical trammel (two perpendicular slots + sliding beam)|Circle, ellipse, degenerate straight line|`b = a·√(1−e²)`|
|2|Focus \& directrix rig (T-square + taut thread)|Parabola|thread length = focus–directrix distance `p`|
|3|Two-focus rod \& thread|Hyperbola|`e = c/a`|
|4|Angle-lock ruler pair|Pair of straight lines|`e = sec(α/2)`|

Module 1 is the odd one out on purpose: a circle is just the trammel at `e = 0`, so it isn't
a separate mechanism — only a separate name for the same beam at a different setting.

## Six more curves, same idea

|Attachment|Draws|Principle|
|-|-|-|
|Scotch yoke|Sine wave|rotating pin's height, `y = R·sin θ`, read off against constant-speed feed|
|Rolling disc on a rail|Cycloid|circle of radius `r` rolling without slipping along a straight track|
|Rolling disc on a fixed disc|Cardioid|same disc, rolling around an equal fixed disc instead|
|Fixed post + string|Archimedean spiral|cord winding on a post of radius `ρ` gives `r = ρ·θ` for free (involute of a circle)|
|Carriage + rotating arm|Helix (side view)|constant rotation `θ` + constant axial feed `x = k·θ`|
|Same rig, growing radius|Spiralling / conical helix|helix + Archimedean growth combined|

## Building the physical instrument

Both blueprint SVGs are drawn at **1 unit = 1mm** — open them in Inkscape/Illustrator and
either print at 100% as a cutting template or feed them straight to a laser cutter/CNC. Each
sheet includes a scale bar, a bill of materials, and per-part dimensions.

Everything is 6mm ply/MDF or acrylic, joined with M6 bolts, wingnuts, and washers (sized
wider than the slots they ride in), plus low-stretch thread for the parabola and hyperbola
modules. No custom machining beyond what a scroll saw, laser cutter, or careful hand-cutting
can do.

Two build notes that matter more than they look:

* **Grip beats precision** on the rolling-disc attachment — a slipping rim skids instead of
rolling and visibly kinks the curve. Line the disc rim and its track with matching rubber
or fine sandpaper.
* **The spiral's pencil slider must stay genuinely free** — it's the one part in the whole
instrument that *isn't* clamped. Any friction there stretches the cord instead of pulling
the slider smoothly, and flattens the spiral.

## The demo

`demo/conic\_curve\_generator\_demo.html` is fully self-contained (open it directly in any
browser, no server required). It mirrors the physical build's controls exactly:

* **Guided tour** — auto-plays all eleven curves in sequence, each drawn progressively from
a blank stage, with pause/resume.
* **Manual mode** — pick any curve, drag its parameter for an instant live preview, or hit
**Draw it** to watch the full progressive animation.

It respects `prefers-reduced-motion` and needs nothing but a browser.

## License

Add a `LICENSE` file for whichever terms you want (MIT is a common default for a project
like this). Until then, all rights are reserved by default under GitHub's terms.

