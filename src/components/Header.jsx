"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Header = () => {
  const itemCount = 5;

  return (
    <header className="bg-color-primary border-b-[2px] border-color-accent">
      <div className="container flex items-center justify-between py-[16px]">
        <Link href="/" className="mr-[16px]">
          <Image
            src="/icons/logo.svg"
            alt="MR.TRANSPORTER"
            width={340}
            height={21}
            className="lg:w-[340px] md:min-w-[280px]"
          />
        </Link>

        <div className="flex items-center gap-[24px]">
          <nav className="flex gap-[24px]">
            <Link href="/about" className="py-[8px]" style={{ whiteSpace: 'nowrap' }}>Über uns</Link>
            <Link href="/pickup" className="py-[8px]" style={{ whiteSpace: 'nowrap' }}>Fahrzeug abholen</Link>
            <Link href="/contact" className="py-[8px]">Kontakt</Link>
            <Link href="/account" className="py-[8px]" style={{ whiteSpace: 'nowrap' }}>Mein Konto</Link>
          </nav>

          <Button
            label={
              <span className="hidden lg:inline ml-[8px]">Anmelden</span>
            }
            height="42"
            
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 21 20"
                fill="currentColor"
              >
                <path d="M10.5 0C5.079 0 0.5 4.579 0.5 10C0.5 15.421 5.079 20 10.5 20C15.921 20 20.5 15.421 20.5 10C20.5 4.579 15.921 0 10.5 0ZM10.5 5C12.227 5 13.5 6.272 13.5 8C13.5 9.728 12.227 11 10.5 11C8.774 11 7.5 9.728 7.5 8C7.5 6.272 8.774 5 10.5 5ZM5.394 14.772C6.291 13.452 7.787 12.572 9.5 12.572H11.5C13.214 12.572 14.709 13.452 15.606 14.772C14.328 16.14 12.515 17 10.5 17C8.485 17 6.672 16.14 5.394 14.772Z" />
              </svg>
            }
            iconPosition="left"
          />

          <Link href="/cart" className="relative" >
            <Image
              src="/icons/cart.svg"
              alt="Cart"
              width={26}
              height={26}
              className="min-w-[26px]"
            />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-color-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
