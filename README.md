# Argos Web

Argos Elektro-Optik kurumsal web sitesi.  
Proje `Next.js (App Router)` ile geliştirilmiştir.

## Özellikler

- Çok dilli içerik (TR/EN)
- Ürün detay sayfaları (`ASL-20`, `S-BATTERY`, `C-SAL`)
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

`admin` panel erişimi ve analitik için aşağıdaki değişkenleri tanımlayabilirsiniz:

```bash
ADMIN_PANEL_USERNAME=your_admin_username
ADMIN_PANEL_PASSWORD=your_admin_password
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_verification_code
```

Notlar:

- `ADMIN_PANEL_USERNAME/PASSWORD` tanımlıysa `/admin/admin-log-panel` ve `/api/admin-logs/*` Basic Auth ile korunur.
- Tanımlı değilse admin erişimi açık kalır (dev/test kolaylığı).

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

Log verileri sunucu tarafında `data/` klasörü altında JSON dosyalarına yazılır:

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
