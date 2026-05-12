"use client";

import Image from "next/image";
import { Plane, Car, Sun, Map, MessageCircle } from "lucide-react";

export default function CeylonVisitorsServices() {
  return (
    <main className="bg-[#f4f4f4] text-[#071a24]">
      {/* Desktop View - only desktop */}
      <section className="hidden md:block">
        <ServicesPage desktop />
      </section>

      {/* Mobile View - only mobile */}
      <section className="block md:hidden">
        <ServicesPage />
      </section>
    </main>
  );
}

function ServicesPage({ desktop = false }: { desktop?: boolean }) {
  const whatsappLink =
    "https://wa.me/94771303301?text=Hello, I want to book a ride.";

  const services = [
    {
      icon: Plane,
      title: "Airport Transfers",
      desc: "Safe and comfortable pickups from Bandaranaike International Airport or anywhere in Sri Lanka.",
      points: [
        "Meet & Greet at Arrivals",
        "Luggage Assistance",
        "Air-conditioned Vehicles",
      ],
    },
    {
      icon: Car,
      title: "Chauffeur Service",
      desc: "Private driver with local expertise for stress-free travel.",
      points: ["English Speaking Drivers", "Flexible Hours", "Local knowledge"],
    },
    {
      icon: Sun,
      title: "Day Tours",
      desc: "Explore iconic destinations in one day.",
      points: [
        "Sigiriya Rock Fortress",
        "Kandy Temple & Gardens",
        "Galle Fort",
      ],
    },
    {
      icon: Map,
      title: "Multi-Day Tours",
      desc: "Fully planned journeys across Sri Lanka.",
      points: [
        "Customizable Routes",
        "Hotel Recommendations",
        "Activity Planning",
      ],
    },
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[420px] flex items-center justify-center text-center text-white overflow-hidden rounded-[34px] mx-5 md:mx-[88px]">
        <Image
          src="/images/services.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#071a24]/70" />

        <div className="relative z-10 px-5">
          <p className="text-[#d8b62f] text-[12px] mb-2">What We Offer</p>

          <h1 className="font-serif text-[42px] md:text-[52px] font-bold">
            Our Travel Services
          </h1>

          <p className="text-[14px] mt-3 text-gray-200 max-w-[520px] mx-auto">
            Professional, reliable, and comfortable transport solutions for
            every type of traveler.
          </p>

          <div className="w-[55px] h-[3px] bg-[#d8b62f] mx-auto mt-5" />
        </div>
      </section>

      {/* ================= CARDS ================= */}
      <section
        className={`px-5 md:px-[105px] py-[60px] grid gap-[30px] ${
          desktop ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        {services.map((s, i) => (
          <div key={i} className="bg-white rounded-[12px] p-[30px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="w-[48px] h-[48px] bg-[#f8f9fa] group-hover:bg-[#1597ff] group-hover:text-white transition-colors duration-300 rounded-[10px] flex items-center justify-center mb-4">
              <s.icon size={24} className="text-[#071a24] group-hover:text-white transition-colors duration-300" />
            </div>

            <h3 className="font-serif text-[22px] font-bold mb-3 text-[#071a24]">{s.title}</h3>
            
            <div className="w-[30px] h-[2px] bg-[#d8b62f] mb-4" />

            <p className="text-[14px] text-[#4b5563] mb-5 leading-[24px] min-h-[48px]">
              {s.desc}
            </p>

            <ul className="text-[13px] mb-6 space-y-3 font-medium text-[#273444]">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <div className="w-[5px] h-[5px] bg-[#d8b62f] rounded-full flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-[46px] bg-[#f8f9fa] hover:bg-[#10d65c] text-[#071a24] hover:text-white font-bold text-[14px] rounded-[6px] flex items-center justify-center gap-2 transition duration-300 border border-gray-200 hover:border-transparent"
            >
              <MessageCircle size={16} />
              Book via WhatsApp
            </a>
          </div>
        ))}
      </section>

      {/* ================= CTA BUTTON ================= */}
      <div className="text-center pb-[70px]">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 h-[54px] bg-[#10d65c] hover:bg-[#0fc955] text-white font-bold text-[15px] rounded-full shadow-lg transition duration-300 transform hover:-translate-y-1"
        >
          <MessageCircle size={18} className="mr-2" />
          Request a Custom Service
        </a>
      </div>
    </>
  );
}
