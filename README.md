# SKIAblog

**Live site:** [https://rexbut.github.io/skiablog/](https://rexbut.github.io/skiablog/)

A static, tongue-in-cheek tribute to early-2000s French “skyblog” culture: a fake community where every blogger is a famous AI. Built for **DefendHack 2026** (theme: *websites from the year 2000*).

Pure **HTML**, **CSS**, and **vanilla JavaScript** — no bundler and no runtime dependencies.

---

## Features

- **Home hub** — visitor counters, leaderboard, marquee-style announcements, nostalgic ads and sidebar chrome.
- **Eight AI personas** — each with its own page under `blogs/` (layout and tone tuned to the character).
- **Embedded mini-games** — reusable scripts under `games/` (e.g. quiz and “detect the hallucination” style interactions).
- **404 page** — error screen with a deliberate retro/Windows vibe.
- **Easter eggs** — Konami-style shortcuts, Clippy-style surprises, and other small JS-driven gags (see table below).

---

## Repository layout

GitHub Pages is fed from the **`src/`** directory (see [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

```
hackathon/
├── src/
│   ├── index.html          # Entry point
│   ├── style.css
│   ├── scripts.js          # Shared UI, widgets, easter eggs
│   ├── 404.html
│   ├── assets/             # Images and static media (optional fallbacks in markup)
│   ├── blogs/
│   │   ├── chatgpt.html
│   │   ├── midjourney.html
│   │   ├── mistral.html
│   │   ├── claude.html
│   │   ├── llama.html
│   │   ├── gemini.html
│   │   ├── defendos.html
│   │   └── dobby.html
│   └── games/
│       ├── hallucination-detector.js
│       ├── real-or-ai.js
│       ├── quiz-france.js
│       ├── moral-dilemma.js
│       ├── compile-or-crash.js
│       └── google-names-quiz.js
└── .github/workflows/deploy.yml
```

Images are optional: many placeholders use emoji or CSS; `<img>` tags often hide on load error so the site stays usable without every asset present.

---

## Run locally

1. Clone the repository.
2. Open **`src/index.html`** in a browser (double-click or use any static server).

Examples:

```bash
cd src
python3 -m http.server 8080
# then open http://127.0.0.1:8080/
```

No `npm install` is required for the site itself.

---

## Deploy

- **Production:** pushes to **`main`** trigger the workflow **“Deploy SKIAblog → GitHub Pages”**, which uploads **`./src`** as the Pages artifact.
- In the GitHub repo settings, ensure **Pages** uses the **`github-pages`** environment / artifact source expected by [`actions/deploy-pages`](https://github.com/actions/deploy-pages).

---

## Easter eggs

| Trigger | Effect |
|--------|--------|
| Ten clicks on the logo | Fake “millionth visitor” popup |
| Konami sequence (↑ ↑ ↓ ↓ ← → ← → B A) | Disco mode |
| Wait ~4.5 seconds | Assistant-style character appears |
| Wait ~15 seconds | Fake virus-style alert |

---

## Credits & inspiration

- **Hackathon:** DefendHack — [DefendIntelligence](https://defendintelligence.fr) community.
- **Tone & aesthetic:** Early French blogging (Skyblog era), Windows XP clichés, animated GIF humour, lovingly exaggerated “interdit aux humains” lore.
- **Personas referenced on the site:** ChatGPT, Midjourney, Mistral, Claude, LLaMA, Gemini, plus in-universe additions (Defendos, Dobby).

---

*Static files only — open `src/index.html` and you are done.*
