import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'JC SRS Centre | Digital Service Kendra — Workforce • Business • Growth',
  description: 'JC SRS Centre – Digital Service Kendra powered by JC Integrated Business Pvt. Ltd. offers Manpower Solutions, Vendor Support, Financial & Insurance Services, and Digital Services. Start your franchise today for just ₹49,999.',
  keywords: 'JC SRS Centre, Digital Service Kendra, franchise, manpower solutions, digital services, vendor support, financial services',
  openGraph: {
    title: 'JC SRS Centre | Workforce • Business • Growth',
    description: 'Start your own Digital Service Centre franchise with 100+ services. Low investment, high returns.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
