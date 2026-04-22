# FLYZERK Technology Dissect (Classic Site Mapping)

## Modern Stack (Detected)
- App framework: Next.js (high confidence)
- UI library: React (high confidence)
- Styling: Tailwind CSS v3.4.18 (confirmed from CSS banner)
- Animation: Framer Motion (high confidence)
- Bundler/runtime: Webpack chunk runtime
- App-level i18n: Language provider and translation JSON bundles

## Classic Site System Translation
- CMS type: Custom/headless frontend app
- Theme type: Custom React-based implementation
- Page builder (Elementor/Visual Composer): Not detected as active runtime
- E-commerce plugin stack (WooCommerce/Shopify app): Not detected
- Legacy jQuery plugin architecture: Not primary architecture
- Tracking stack (GTM/GA/Meta Pixel): No direct external call confirmed in saved dump

## Confidence Notes
- `chrome-extension://...` script source is browser-extension injected and excluded.
- `elementor` keyword appears in generic extension/adblock injected CSS text in this dump,
  so it is treated as non-authoritative for WordPress detection.
