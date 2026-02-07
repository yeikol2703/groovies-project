# Groovies Store (Catalog)

Next.js catalog website for GrooviesStore. Products are displayed from Cloudinary and customers are redirected to WhatsApp. No online payments.

## Live
- https://groovies-two.vercel.app/

## Stack
- Next.js (App Router)
- TypeScript
- CSS (global files in `app/styles`)
- Cloudinary (media + metadata)
- Vercel (hosting)

## Requirements
- Node.js 18+

## Setup
```bash
npm install
Environment Variables
Create .env.local in the project root:

# Cloudinary (server)
CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx

# Public
NEXT_PUBLIC_WA_LINK=https://wa.me/506XXXXXXXX
Run (Local)
npm run dev
Open: http://localhost:3000

Build
npm run build
npm start
Cloudinary
Folder Structure
groovies/
  camisas/
  parches/
  sueters/
  otros/
Metadata Fields
category (string): camisas | parches | sueters | otros

price (number)

description (string, optional)

API
GET /api/gallery
Returns images from Cloudinary plus metadata.

Response shape:

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
Catalog Filtering
URL filter: /catalog?cat=parches

Client-side filter uses item.category from API response.

Project Structure
app/
  api/gallery/route.ts
  styles/
  (site)/...
components/
lib/cloudinary.ts
public/
Deploy (Vercel)
Push repo to GitHub

Import project in Vercel

Add env vars (Production)

Deploy
