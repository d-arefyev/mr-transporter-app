import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import SOSButton from "../components/SOSButton";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Mr. Transporter",
  description: "Die Fahrzeuge sind über den gesamten Transportweg versichert",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icons/favicon.svg" />
      </head>
      <body suppressHydrationWarning>
        <Header />
        <div>{children}</div>
        <Footer />
      <SOSButton />
      </body>
    </html>
  );
}
