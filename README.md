# Argos Web

Argos Elektro-Optik kurumsal web sitesi.  
Proje `Next.js (App Router)` ile geliştirilmiştir.

## Özellikler

- Çok dilli içerik (TR/EN)
- Ürün detay sayfaları (`ASL-40`, `S-BATTERY`, `C-SAL`)
- Datasheet indirme öncesi e-posta toplama
- Contact bölümünde "Leave Us a Message" akışı
- Admin log paneli (`/admin/admin-log-panel`)
  - Lead/message listeleme
  - Filtreleme
  - Düzenleme/silme
  - CSV export
- SEO metadata + JSON-LD + sitemap + robots

## Teknoloji

- `next@16`
- `react@19`
- `typescript`
- `framer-motion`
- `lucide-react`

## Kurulum

```bash
npm install
npm run dev
```

Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışır.

## Environment Variables

`admin` panel erişimi, analitik ve production log saklama için aşağıdaki değişkenleri tanımlayabilirsiniz:

```bash
ADMIN_PANEL_USERNAME=your_admin_username
ADMIN_PANEL_PASSWORD=your_admin_password
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_verification_code
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
```

Notlar:

- `ADMIN_PANEL_USERNAME/PASSWORD` tanımlıysa `/admin/admin-log-panel` ve `/api/admin-logs/*` Basic Auth ile korunur.
- Tanımlı değilse admin erişimi açık kalır (dev/test kolaylığı).
- Vercel production için logların kalıcı olması adına `UPSTASH_REDIS_REST_URL` ve `UPSTASH_REDIS_REST_TOKEN` tanımlayın.

## API Uçları

- `POST /api/download-leads`
- `POST /api/contact-messages`
- `GET /api/admin-logs/leads`
- `PUT /api/admin-logs/leads/:id`
- `DELETE /api/admin-logs/leads/:id`
- `GET /api/admin-logs/messages`
- `PUT /api/admin-logs/messages/:id`
- `DELETE /api/admin-logs/messages/:id`

## Veri Saklama

Log verileri:

- Production (Vercel): Upstash Redis'e yazılır (kalıcı).
- Local/dev veya Redis env yoksa: `data/` klasörü altında JSON dosyalarına fallback yapılır.
  - `data/download-leads.json`
  - `data/contact-messages.json`

## Build ve Production

```bash
npm run build
npm run start
```

## Deploy

Önerilen: Vercel.

1. Repo'yu GitHub'a push edin
2. Vercel'de projeyi import edin
3. Environment variables tanımlayın
4. Domain ve DNS yönlendirmesini tamamlayın

## Proje Yapısı (kısa)

- `src/app/` -> sayfalar, API route'lar
- `src/components/` -> UI bileşenleri
- `src/context/` -> dil yönetimi
- `src/lib/` -> log store ve yardımcı modüller
- `public/` -> statik varlıklar
