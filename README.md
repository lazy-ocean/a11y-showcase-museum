# [The Pushkin State Museum of Fine Arts](https://a11y-showcase-museum.vercel.app/en) - Accessibility Showcase/Playground

<img width=100% src="https://github.com/lazy-ocean/a11y-showcase-museum/blob/main/public/demo.gif" alt='a11y showcase demo'/>

This is an a11y playground/showcase sample website made during **[Accessibility Unity](https://accessibilityunity.com/)** learning course. Tested with macOS VoiceOver, keyboard-friendly. Only the main functionality presented, the goal was to tackle frontend challenges such as modals, forms, tabs, carousel, language, and theme switching, keeping everything _as much accessible, valid and user-friendly as possible_.

## 🔗 Deployed version
On Vercel - **[The Pushkin State Museum of Fine Arts](https://a11y-showcase-museum.vercel.app/en)**

## 🌟 General excellence checklist

- [x] 4x 100% Google Lighthouse report   
  
<img width=55% src="https://a11y-showcase-museum.vercel.app/lighthouse-report.gif" alt='Google Lighthouse report'/>

- [x] [w3c Nu HTML Checker](https://validator.w3.org/nu/?doc=https%3A%2F%2Fa11y-showcase-museum.vercel.app%2Fen) - passed with no errors  
<img width=15% src="https://img.shields.io/w3c-validation/default?style=for-the-badge&targetUrl=https%3A%2F%2Fa11y-showcase-museum.vercel.app%2Fen" alt='WCAG 2.1 HTML validator passed badge'/>

- [ ] Unit/integration testing - _TODO_

## ✅ A11y checklist

- [x] 100% keyboard-accessible
- [x] **macOS VoiceOver** tested and friendly
- [x] No issues found by **[axe DevTools](https://www.deque.com/axe/devtools/)**  
<img width=50% src="https://a11y-showcase-museum.vercel.app/axe.png" alt='axe DevTools results'/>

- [x] No errors found by **[Wave - Web Accessibility Evaluation Tool](https://wave.webaim.org/)**
- [x] 100% Accessibility score in **Lighthouse Report**
- [x] Server-side rendering enabled => main info and styles accessible with JavaScript disabled
- [x] Fine on 200% zoom, managable on 500% (looks a bit weird though)
- [x] Dark/light theme support
- [x] WCAG 2.0 level AA compliant colours (both themes), validated with **[WebAIM Contast Checker](https://webaim.org/resources/contrastchecker/)**
- [x] Mobile not first but friendly

In addition: **[The a11y Project Check Your WCAG Compliance Checklist](https://www.a11yproject.com/checklist/)** was used to self-validate and access accessibility and performance.

## 🧰 Stack and tools

- **[Next.js](https://nextjs.org/)** with **TypeScript** integration: React web framework
- **[Prettier](https://prettier.io/docs/en/index.html)** + **[eslint](https://eslint.org/)**: formatting
- **[Husky](https://github.com/typicode/husky)** + **[commitlint](https://github.com/conventional-changelog/commitlint)**: auto-linting commits with Husky for meeting the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/)
- **[styled-components](https://styled-components.com/)**: styling
- **[Vercel](https://vercel.com/)**: deployment.

## ⚙️ Run locally

1. Clone this repo

2. Install all dependencies:

```
$ npm install
# or
$ yarn
```

3. Run the deployment server

```
$ npm run dev
# or
$ yarn dev
```

4. Your app is served at http://localhost:3000/
