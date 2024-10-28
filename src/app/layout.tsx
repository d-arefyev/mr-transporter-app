import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Mr. Transporter",
  description: "Die Fahrzeuge sind über den gesamten Transportweg versichert",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./icons/favicon.svg" />
      </head>
      <body >
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
