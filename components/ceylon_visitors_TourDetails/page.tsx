"use client";

import Image from "next/image";
import { MessageCircle, MapPin, Clock } from "lucide-react";

export default function CeylonVisitorsTourDetails() {
  return (
    <main className="bg-[#f4f4f4] text-[#071a24]">
      {/* Desktop View */}
      <section className="hidden md:block">
        <TourDetails desktop />
      </section>

      {/* Mobile View */}
      <section className="block md:hidden">
        <TourDetails />
      </section>
    </main>
  );
}

function TourDetails({ desktop = false }: { desktop?: boolean }) {
  const whatsapp =
    "https://wa.me/94771303301?text=Hello, I want to book the 7 Days Classic Sri Lanka Tour.";

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[420px] flex items-center justify-center text-center text-white overflow-hidden rounded-[34px] mx-5 md:mx-[88px]">
        <Image
          src="/images/tourdetails/ella-hero.jpg"
          alt="Ella Sri Lanka"
          fill
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#071a24]/70" />

        {/* Hero Title */}
        <div className="relative z-10 text-center px-5">
          <h1 className="font-serif text-[32px] md:text-[52px] font-bold text-white">
            7 Days Classic Sri Lanka Tour
          </h1>

          {/* Yellow Line */}
          <div className="w-[70px] h-[3px] bg-[#d8b62f] mx-auto mt-5" />
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="relative bg-white px-5 md:px-[105px] py-[55px]">
        <p className="text-[13px] leading-[22px] text-[#273444] mb-7">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        {/* Images */}
        <div
          className={`grid gap-5 mb-7 ${desktop ? "grid-cols-3" : "grid-cols-1"}`}
        >
          {[
            "/images/tourdetails/temple.jpg",
            "/images/tourdetails/train.jpg",
            "/images/tourdetails/leopard.jpg",
          ].map((img, index) => (
            <div
              key={index}
              className="relative h-[130px] rounded-[2px] overflow-hidden"
            >
              <Image src={img} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          ))}
        </div>

        <p className="text-[13px] leading-[22px] text-[#273444] mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <div
          className={`grid gap-10 ${desktop ? "grid-cols-[1fr_1.4fr]" : "grid-cols-1"}`}
        >
          {/* Left Info */}
          <div>
            <div className="space-y-3 text-[13px] text-[#273444] mb-8">
              <p className="flex items-center gap-2">
                <MapPin size={15} />
                Colombo → Kandy → Ella → Yala → Galle
              </p>

              <p className="flex items-center gap-2">
                <Clock size={15} />7 Days / 6 Nights
              </p>
            </div>

            <h3 className="font-serif text-[15px] font-bold mb-5">
              Tour Inclusion _
            </h3>

            <ul className="text-[13px] font-bold leading-[22px] mb-8">
              <li>Galle</li>
              <li>Colombo</li>
              <li>Ella</li>
              <li>Badulla</li>
              <li>Yala</li>
              <li>Galle</li>
              <li>Colombo</li>
            </ul>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[220px] h-[38px] bg-[#1597ff] hover:bg-[#057ddd] text-white text-[12px] font-bold rounded-[3px] flex items-center justify-center gap-2 transition"
            >
              <MessageCircle size={14} />
              Book via WhatsApp
            </a>
          </div>

          {/* Destination Map */}
          <div>
            <h3 className="font-serif text-[15px] font-bold mb-3">
              Destination map
            </h3>

            <div className="relative h-[260px] md:h-[310px] overflow-hidden">
              <Image
                src="/images/tourdetails/map.png"
                alt="Destination map"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          </div>
        </div>

        {/* Floating WhatsApp */}
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-6 bottom-6 z-50 w-[42px] h-[42px] rounded-full bg-[#20d969] text-white flex items-center justify-center shadow-lg"
        >
          <MessageCircle size={22} />
        </a>
      </section>
    </>
  );
}
