import type { Metadata } from 'next';
import CSALPageClient from './CSALPageClient';

export const metadata: Metadata = {
    title: 'C-SAL Lazer Nokta Takipçisi | Argos Elektro-Optik',
    description: 'ARGOS C-SAL kompakt lazer nokta takip sensörü. NATO STANAG 3733 uyumlu, 50° FoV, 3 KM menzil. Güdümlü mühimmat ve İHA platformları için.',
    keywords: ['lazer nokta takipçisi', 'C-SAL', 'laser spot tracker', 'NATO STANAG', 'güdümlü mühimmat', 'İHA'],
    openGraph: {
        title: 'C-SAL Lazer Nokta Takipçisi | Argos Elektro-Optik',
        description: 'NATO STANAG 3733 uyumlu kompakt lazer nokta takip sensörü.',
        images: ['/products/csal-overview.png'],
        type: 'website',
    },
};

export default function CSALPage() {
    return <CSALPageClient />;
}
