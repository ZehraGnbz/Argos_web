import type { Metadata } from 'next';
import SBatteryPageClient from './SBatteryPageClient';

export const metadata: Metadata = {
    title: 'S-Battery Hibrit Güç Modülü | Argos Elektro-Optik',
    description: 'ARGOS S-Battery hibrit güç modülü. -40°C ile +71°C arası çalışma, 1,000,000+ döngü ömrü, 60 saniye şarj. Savunma ve endüstriyel uygulamalar için ideal.',
    keywords: ['hibrit batarya', 'S-Battery', 'güç modülü', 'savunma', 'ITAR-free', 'supercapacitor'],
    openGraph: {
        title: 'S-Battery Hibrit Güç Modülü | Argos Elektro-Optik',
        description: 'Yüksek güvenilirlikli hibrit güç modülü. Ekstrem sıcaklıklarda anlık yüksek güç.',
        images: ['/products/s%20battery%20datasheet.png'],
        type: 'website',
    },
};

export default function SBatteryPage() {
    return <SBatteryPageClient />;
}
