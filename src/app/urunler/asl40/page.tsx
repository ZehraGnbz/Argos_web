import type { Metadata } from 'next';
import ASL40PageClient from '../asl20/ASL20PageClient';

export const metadata: Metadata = {
    title: 'ASL-40 Lazer Mesafe Ölçer | Argos Elektro-Optik',
    description: 'ARGOS ASL-40 yüksek hızlı kısa menzilli lazer modülü. 100 kHz örnekleme, FPGA tabanlı işleme, -40°C ile +71°C arası çalışma sıcaklığı. İHA ve robotik sistemler için ideal.',
    keywords: ['lazer mesafe ölçer', 'ASL-40', 'laser range finder', 'İHA', 'robotik', 'FPGA', 'elektro-optik'],
    openGraph: {
        title: 'ASL-40 Lazer Mesafe Ölçer | Argos Elektro-Optik',
        description: 'Yüksek hızlı kısa menzilli lazer mesafe ölçüm modülü. 100 kHz örnekleme, FPGA işleme.',
        images: ['/products/asl40-datasheet.png'],
        type: 'website',
    },
};

export default function ASL40Page()
{
    return <ASL40PageClient />;
}
