import './css/globals.css';
// import '../public/js/script';

import { Inknut_Antiqua } from 'next/font/google';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Head from 'next/head';
import Link from 'next/link';

const inkNut = Inknut_Antiqua({ 
  subsets: ['latin'],
  weight: ['300', '500', '700', '900']
});

export const metadata = {
  title: 'Le Apero Restaurant',
  description: 'French Cuisine Restaurant',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <Link rel="stylesheet" href="https://use.typekit.net/xus6stc.css" />
      </Head>
      <body className={`${inkNut.className} bg-main-color text-secondary-color`}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
