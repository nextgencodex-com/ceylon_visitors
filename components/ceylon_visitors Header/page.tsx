"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header({ desktop = false }: { desktop?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tours", href: "/ceylon_visitors_Tours" },
    { name: "Services", href: "/ceylon_visitors_Services" },
    { name: "About", href: "/ceylon_visitors_About" },
    { name: "Reviews", href: "/ceylon_visitors_Reviews" },
    { name: "Contact", href: "/ceylon_visitors_Contact" },
  ];

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden relative h-[58px] bg-white flex items-center justify-between px-5 shadow-sm z-50">
        <Link href="/">
          <Image
            src="/images/logoo.svg"
            alt="Ceylon Visitors Logo"
            width={45}
            height={38}
            className="object-contain"
          />
        </Link>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} className="text-[#071a24]" /> : <Menu size={24} className="text-[#071a24]" />}
        </button>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-[58px] left-0 right-0 bg-white border-b border-gray-100 shadow-lg py-5 px-5 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-[14px] font-semibold ${
                  pathname === link.href ? "text-[#1597ff]" : "text-[#071a24]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 h-[40px] bg-[#1597ff] text-white text-[13px] font-bold rounded-[4px] flex items-center justify-center"
            >
              Get A Quote
            </Link>
          </div>
        )}
      </header>

      {/* Desktop Header */}
      <header className="hidden md:flex h-[58px] bg-white items-center justify-between px-[88px] shadow-sm">
        <Image
          src="/images/logo.svg"
          alt="Ceylon Visitors Logo"
          width={50}
          height={40}
          className="object-contain"
        />

        <nav className="flex items-center gap-[37px] text-[12px] font-semibold text-[#071a24]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors hover:text-[#1597ff] ${
                pathname === link.href ? "text-[#1597ff]" : "text-[#071a24]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/ceylon_visitors_Contact"
          className="h-[34px] w-[105px] bg-[#1597ff] hover:bg-[#057ddd] text-white text-[12px] font-bold rounded-[4px] flex items-center justify-center transition"
        >
          Get A Quote
        </Link>
      </header>
    </>
  );
}
