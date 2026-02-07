````md
# Groovies Store (Catalog)

Next.js product catalog for GrooviesStore. Products are loaded from Cloudinary (including metadata) and customers are redirected to WhatsApp. No online payments.

## Live
https://groovies-two.vercel.app/

## Screenshots

### Catalog
<img width="1887" height="882" alt="image" src="https://github.com/user-attachments/assets/a6168236-8bff-4ff7-97ea-6ad231882fc4" />

### Home (Mobile)
<img width="445" height="727" alt="image" src="https://github.com/user-attachments/assets/27d2aa8e-9627-4c49-a761-3edba9f17194" />

## Tech Stack
- Next.js (App Router)
- TypeScript
- CSS (global styles under `app/styles`)
- Cloudinary (media + metadata)
- Vercel (hosting)

## Requirements
- Node.js 18+

## Setup
```bash
npm install
````

## Environment Variables

Create `.env.local` in the project root:

```env
# Cloudinary (server-side only)
CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx

# Public
NEXT_PUBLIC_WA_LINK=https://wa.me/506XXXXXXXX
```

## Run (Local)

```bash
npm run dev
```

Open: [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Cloudinary

### Folder Structure

```
groovies/
  camisas/
  parches/
  sueters/
  otros/
```

### Metadata Fields

* `category` (string): camisas | parches | sueters | otros
* `price` (number)
* `description` (string, optional)

## API

### GET `/api/gallery`

Returns images from Cloudinary plus metadata.

Response shape:

```json
[
  {
    "id": "asset_id",
    "url": "secure_url",
    "publicId": "public_id",
    "category": "camisas",
    "price": 12000,
    "description": "optional"
  }
]
```

## Catalog Filtering

* URL filter: `/catalog?cat=parches`
* Client-side filtering uses `item.category` and search input

## Project Structure

```
app/
  api/gallery/route.ts
  catalog/page.tsx
  galery/page.tsx
  custom/page.tsx
  testimonials/page.tsx
  faq/page.tsx
  contact/page.tsx
  styles/
    globals.css
    tokens.css
    layout.css
    sections.css
    components.css
components/
  layout/
    Header.tsx
    Footer.tsx
  ui/
    CategoryCarousel.tsx
lib/
  cloudinary.ts
public/
  images/
```

## Deploy (Vercel)

1. Push repo to GitHub
2. Import project in Vercel
3. Add env vars (Production)
4. Deploy

## Notes

* Do not commit `.env.local`
* Cloudinary secrets must remain server-side (no `NEXT_PUBLIC_` for secrets)
* WhatsApp is the primary sales channel

```
::contentReference[oaicite:0]{index=0}
```
