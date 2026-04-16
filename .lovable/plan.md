
## Goal
Provide you with a complete record of how this site was built, plus a reusable prompt and guidance for downloading the source.

## What I'll deliver
A single downloadable Markdown file at `/mnt/documents/KO-site-build-guide.md` containing four sections:

### 1. Prompt history (your instructions to me, in order)
A clean, chronological list of every prompt you sent in this project:
1. Initial remix / "What would be a good next step?"
2. Visual text edits — change hero title to "Kingsley" and replace description with the Product Designer copy
3. "Update the brand name globally to KO"
4. "Reduce this section to 5 cards, and make the first card a long rectangular card"
5. "The first card should be a long rectangular card with the text underneath"
6. This request (asking for prompts + assets)

### 2. A reusable master prompt
A single, polished prompt you could paste into a fresh Lovable project to regenerate a site like this one — covering: brand ("KO"), hero (title + Product Designer description), 5-card article grid with a wide first card, header nav (About the Author, Get in touch, Newsletter), footer, and the React + Vite + Tailwind + shadcn/ui stack already in use.

### 3. Files / assets used
A list of the key files that make up the site, grouped by purpose:
- **Pages**: `src/pages/Index.tsx`, `Article.tsx`, `Contact.tsx`, `PrivacyPolicy.tsx`, `NotFound.tsx`
- **Layout components**: `Header.tsx`, `Section.tsx`, `GridContainer.tsx`, `BlogHero.tsx`, `WavyBackground.tsx`
- **Article components**: `ArticlePreview.tsx`, `ArticleComponents.tsx`
- **Content/data**: `src/data/articles.ts` (titles, slugs, hero images)
- **Styling**: `src/index.css`, `tailwind.config.ts`
- **UI primitives**: `src/components/ui/*` (shadcn/ui)
- **Meta**: `index.html`
- Note: hero/article images currently reference placeholder URLs in `articles.ts` — no custom image assets have been uploaded to this project.

### 4. How to download the source code
Step-by-step: use Lovable's GitHub export (top-right → GitHub → Connect/Transfer) to get the full repo, OR download the project ZIP from the dashboard. Once exported, run `npm install` and `npm run dev` locally.

## Format
- Downloadable Markdown file in `/mnt/documents/` (rendered as a download chip in chat)
- Brief summary in chat with the highlights

## What I will NOT include
- I won't invent any prompts you didn't actually send.
- I won't bundle the codebase as a ZIP from my side — Lovable's built-in GitHub/ZIP export is the correct, official path and I'll point you to it.

If you'd rather have a PDF, only the reusable prompt, or a different scope, just say so and I'll adjust before generating anything.
