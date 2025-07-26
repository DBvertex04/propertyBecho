import './globals.css';
import { Nunito_Sans } from 'next/font/google';

const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  weight: ['200', '300', '400', '600', '700', '800', '900'], // optional range
});

export const metadata = {
  title: 'Your App',
  description: 'Using Nunito Sans globally',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.variable}>
      <body>{children}</body>
    </html>
  );
}
