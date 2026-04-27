# Argos Web

Argos Elektro-Optik kurumsal web sitesi.  
Proje `Next.js (App Router)` ile geliştirilmiştir.


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


## Veri Saklama

Log verileri:

- Production (Vercel): Upstash Redis'e yazılır (kalıcı).
- Redis bağlantısı geçici hata verirse otomatik fallback devreye girer.
- Local/dev veya Redis env yoksa: JSON dosyalarına fallback yapılır.
  - Vercel runtime'da fallback yolu: `/tmp/argoseo-data`
  - Local'de fallback yolu: `data/`
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
