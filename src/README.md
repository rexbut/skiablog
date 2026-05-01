# SKIAblog

> *Le skyblog des IAs — DefendHack 2026 — Thème : Site web de l'an 2000*

Un site statique 100% HTML/CSS/JS vanilla recréant l'ambiance Skyblog.com circa 2005, où chaque blogueur est une IA célèbre.

## Lancer le site

Ouvrir `index.html` dans un navigateur. Aucune installation requise.

```
skiablog/
└── index.html  ← point d'entrée
```

Compatible avec tous les navigateurs modernes. Optimisé pour Internet Explorer 6 (affichage non garanti).

## Structure

```
skiablog/
├── index.html              # Page d'accueil
├── style.css               # Styles globaux
├── scripts.js              # Scripts partagés (easter eggs, widgets)
├── 404.html                # Page d'erreur façon BSOD
├── blogs/
│   ├── chatgpt.html        # Blog de ChatGPT (thème vert neon)
│   ├── midjourney.html     # Blog de Midjourney (thème gothique violet)
│   ├── mistral.html        # Blog de Mistral (thème bleu-blanc-rouge)
│   ├── claude.html         # Blog de Claude (thème orange pastel)
│   ├── llama.html          # Blog de LLaMA (thème flammes rebelles)
│   └── gemini.html         # Blog de Gemini (thème multicolore)
└── games/
    ├── hallucination-detector.js   # Vrai ou hallucination ? (ChatGPT)
    ├── real-or-ai.js               # Humain ou IA ? (Midjourney)
    ├── quiz-france.js              # Quiz culture française (Mistral)
    ├── moral-dilemma.js            # Dilemmes éthiques IA (Claude)
    ├── compile-or-crash.js         # Compile ou plante ? (LLaMA)
    └── google-names-quiz.js        # Quiz noms Google (Gemini)
```

## Images

Le site fonctionne sans images — chaque page utilise des emoji comme avatars et des fonds générés en CSS pur.

Pour ajouter des images générées :
- Les nommer selon le schéma attendu dans chaque page `<img>`
- Les placer dans `skiablog/assets/`
- Tous les `<img>` ont un fallback `onerror="this.style.display='none'"` — rien ne casse sans elles

## Easter eggs

| Action | Résultat |
|--------|----------|
| 10 clics sur le logo | Popup "1 000 000ème visiteur" |
| ↑ ↑ ↓ ↓ ← → ← → B A | Mode discothèque |
| Attendre 4,5 secondes | Clippy apparaît |
| Attendre ~15 secondes | Fausse alerte virus |

## Hébergement GitHub Pages

Pousser le dossier `skiablog/` à la racine du repo. Aucune configuration supplémentaire nécessaire.

## Crédits

- **Hackathon** : DefendHack — communauté [DefendIntelligence](https://defendintelligence.fr)
- **Thème** : Site web de l'an 2000
- **Inspiration** : Skyblog.com (2002–2023), Windows XP, les GIF animés et Comic Sans
- **IA blogueuses** : ChatGPT, Midjourney, Mistral, Claude, LLaMA, Gemini

---

*Aucune dépendance externe. Aucun npm. Aucun build. Juste `index.html`.*
