 "use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, Send } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header({ desktop = false }: { desktop?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
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
            src="/images/header/logo.jpeg"
            alt="Ceylon Visitors Logo"
            width={45}
            height={38}
            className="object-contain"
          />
        </Link>

        <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X size={24} className="text-[#071a24]" />
          ) : (
            <Menu size={24} className="text-[#071a24]" />
          )}
        </button>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-[58px] left-0 right-0 bg-white border-b border-gray-100 shadow-lg py-5 px-5 flex flex-col gap-4">
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

            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
                setIsQuoteOpen(true);
              }}
              className="mt-2 h-[40px] bg-[#1597ff] text-white text-[13px] font-bold rounded-[4px] flex items-center justify-center"
            >
              Get A Quote
            </button>
          </div>
        )}
      </header>

      {/* Desktop Header */}
      <header className="hidden md:flex h-[58px] bg-white items-center justify-between px-[88px] shadow-sm">
        <Link href="/">
          <Image
            src="/images/header/logo.jpeg"
            alt="Ceylon Visitors Logo"
            width={50}
            height={40}
            className="object-contain"
          />
        </Link>

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

        <button
          type="button"
          onClick={() => setIsQuoteOpen(true)}
          className="h-[34px] w-[105px] bg-[#1597ff] hover:bg-[#057ddd] text-white text-[12px] font-bold rounded-[4px] flex items-center justify-center transition"
        >
          Get A Quote
        </button>
      </header>

      {/* Get A Quote Popup */}
      {isQuoteOpen && (
        <div className="fixed inset-0 z-[999] bg-[#071a24]/70 flex items-center justify-center px-5">
          <div className="bg-white w-full max-w-[430px] rounded-[14px] p-8 relative shadow-xl">
            <button
              type="button"
              onClick={() => setIsQuoteOpen(false)}
              className="absolute right-5 top-4 text-[24px] font-bold text-gray-500 hover:text-[#071a24]"
            >
              ×
            </button>

            <h2 className="font-serif text-[24px] font-bold text-[#071a24] mb-6">
              Get a Quote
            </h2>

            <form className="space-y-5">
              <QuoteInput label="Full Name" placeholder="John Doe" />
              <QuoteInput label="Email Address" placeholder="john@example.com" />
              <QuoteInput label="Destination" placeholder="Select Destination" />
              <QuoteInput label="Phone Number" placeholder="+94" />

              <button
                type="button"
                className="w-full h-[46px] bg-[#1597ff] hover:bg-[#057ddd] text-white text-[14px] font-bold rounded-[6px] flex items-center justify-center gap-3 transition"
              >
                <Send size={17} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

function QuoteInput({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block text-[13px] font-bold text-[#071a24] mb-2">
        {label}
      </label>

      <input
        placeholder={placeholder}
        className="w-full h-[44px] bg-[#f3f4f6] border border-gray-200 rounded-[6px] px-4 text-[13px] outline-none"
      />
    </div>
  );
}