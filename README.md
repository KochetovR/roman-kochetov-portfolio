# Roman Kochetov — Portfolio

The personal portfolio of Roman Kochetov, presenting selected web projects as concise case studies. The site is English-first and also available in Ukrainian and Russian.

**Live site:** [roman-kochetov-portfolio.netlify.app](https://roman-kochetov-portfolio.netlify.app/)

## Highlights

- Responsive one-page portfolio with project case studies
- Localized routes for English, Ukrainian, and Russian
- Light and dark themes
- Accessible keyboard and touch interactions, including reduced-motion support
- Static project pages generated from shared project data

## Tech stack

- [Next.js](https://nextjs.org/) 16 with the App Router
- React 19 and TypeScript (strict mode)
- Tailwind CSS 4

## Routes

| Language | Home | Case study |
| --- | --- | --- |
| English | `/` | `/work/[slug]` |
| Ukrainian | `/uk` | `/uk/work/[slug]` |
| Russian | `/ru` | `/ru/work/[slug]` |

Project copy and metadata live in `app/data/`; reusable interface components live in `app/components/`.

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful commands:

```bash
npm run lint
npm run build
npm run start
```

## Deployment

The repository is continuously deployed from the `main` branch with [Netlify](https://roman-kochetov-portfolio.netlify.app/). Netlify detects this Next.js application and supports the App Router through its OpenNext integration; no custom server configuration or static export is required.

Recommended Netlify build settings:

- Build command: `npm run build`
- Publish directory: `.next`
- Production branch: `main`

## Development workflow

`main` should always be deployable. Make focused changes in short-lived feature branches and merge them into `main` when they are ready for production.

## License

All portfolio content and visual assets are © Roman Kochetov. Source code may not be reused without permission.
