"use client";

import Image from "next/image";
import { MessageCircle, MapPin, Clock, Phone, Mail, Map } from "lucide-react";

export default function CeylonVisitorsTourDetails({ tour }: { tour?: any }) {
  if (!tour) return null;

  return (
    <main className="bg-[#f4f4f4] text-[#071a24]">
      {/* Desktop View */}
      <section className="hidden md:block">
        <TourDetails desktop tour={tour} />
      </section>

      {/* Mobile View */}
      <section className="block md:hidden">
        <TourDetails tour={tour} />
      </section>
    </main>
  );
}

function TourDetails({ desktop = false, tour }: { desktop?: boolean; tour: any }) {
  const whatsapp =
    `https://wa.me/94771303301?text=Hello, I want to book the ${tour.title}.`;

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[420px] flex items-center justify-center text-center text-white overflow-hidden rounded-[34px] mx-5 md:mx-[88px]">
        <Image
          src={tour.images?.[0] || "/images/tourdetails/ella-hero.jpg"}
          alt={tour.title}
          fill
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#071a24]/70" />

        {/* Hero Title */}
        <div className="relative z-10 text-center px-5">
          <h1 className="font-serif text-[32px] md:text-[52px] font-bold text-white">
            {tour.duration} {tour.title}
          </h1>

          {/* Yellow Line */}
          <div className="w-[70px] h-[3px] bg-[#d8b62f] mx-auto mt-5" />
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="relative bg-white px-5 md:px-[105px] py-[55px] max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Content (Text & Itinerary) */}
          <div className="flex-1">
            <h2 className="font-serif text-[24px] font-bold text-[#071a24] mb-4">
              Tour Overview
            </h2>
            <div className="w-[50px] h-[2px] bg-[#d8b62f] mb-6" />
            
            <div className="flex items-center gap-6 mb-8 text-[14px] text-[#273444] font-medium border-b pb-4">
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-[#d8b62f]" /> {tour.duration}
              </span>
              {tour.itinerary?.length > 0 && (
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#d8b62f]" />
                  {tour.itinerary.length} Destinations
                </span>
              )}
            </div>

            <p className="text-[14px] leading-[26px] text-[#4a5564] mb-10 whitespace-pre-wrap">
              {tour.description}
            </p>

            {tour.itinerary?.length > 0 && (
              <>
                <h2 className="font-serif text-[24px] font-bold text-[#071a24] mb-4">
                  Itinerary Detailed
                </h2>
                <div className="w-[50px] h-[2px] bg-[#d8b62f] mb-6" />
                
                <div className="space-y-6 mb-10">
                  {tour.itinerary.map((item: any, i: number) => (
                    <div key={i} className="flex gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="min-w-[60px] font-bold text-[#071a24] text-[14px]">
                        {item.day}
                      </div>
                      <div className="w-[2px] bg-[#d8b62f] opacity-50" />
                      <div className="text-[14px] text-[#4a5564] font-medium">
                        {item.location}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[46px] px-8 bg-[#10d65c] hover:bg-[#0fc955] text-white text-[14px] font-bold rounded-[4px] items-center justify-center gap-2 transition shadow-md mb-12"
            >
              <MessageCircle size={18} />
              Inquire & Book via WhatsApp
            </a>

            {/* Contact Details & Map */}
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 md:p-8">
              <h2 className="font-serif text-[24px] font-bold text-[#071a24] mb-4">
                Contact Us
              </h2>
              <div className="w-[50px] h-[2px] bg-[#d8b62f] mb-6" />

              <div className="space-y-4 mb-8 text-[#4a5564] text-[14px]">
                <p className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#d8b62f] mt-0.5 flex-shrink-0" />
                  <span>101/B, Kahatapitiya, Hanwella, Colombo.</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={18} className="text-[#d8b62f] flex-shrink-0" />
                  <a href="tel:+94771303301" className="hover:text-[#d8b62f] transition">+94 77 130 3301</a>
                </p>
                <p className="flex items-center gap-3">
                  <Mail size={18} className="text-[#d8b62f] flex-shrink-0" />
                  <a href="mailto:ceylonvisitortours@gmail.com" className="hover:text-[#d8b62f] transition">ceylonvisitortours@gmail.com</a>
                </p>
              </div>

              <div className="rounded-lg overflow-hidden h-[250px] border border-gray-200">
                <iframe
                  src="https://maps.google.com/maps?q=Kahatapitiya,Hanwella,Colombo&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Content (Images & Sidebar) */}
          <div className={`md:w-[380px] space-y-6 ${desktop ? 'sticky top-[100px] h-fit' : ''}`}>
            {tour.images?.slice(1).map((img: string, index: number) => (
              <div
                key={index}
                className="relative h-[240px] rounded-[8px] overflow-hidden shadow-sm group"
              >
                <Image 
                  src={img} 
                  alt="" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  sizes="(max-width: 768px) 100vw, 380px" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Floating WhatsApp is provided globally via FloatingWhatsApp component in layout.tsx */}
      </section>
    </>
  );
}
