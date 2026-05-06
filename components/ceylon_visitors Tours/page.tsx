"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, MessageCircle } from "lucide-react";

export default function CeylonVisitorsTours() {
  return (
    <main className="bg-[#f4f4f4] text-[#071a24]">
      {/* Desktop View - only desktop */}
      <section className="hidden md:block">
        <ToursPage desktop />
      </section>

      {/* Mobile View - only mobile */}
      <section className="block md:hidden">
        <ToursPage />
      </section>
    </main>
  );
}

function ToursPage({ desktop = false }: { desktop?: boolean }) {
  const whatsapp = "https://wa.me/94713807185";

  const tours = [
    {
      title: "7 Days Classic Sri Lanka Tour",
      price: "$450",
      badge: "Most Popular",
      img: "/images/tours/1.jpg",
      route: "Colombo → Kandy → Ella → Yala → Galle",
      duration: "7 Days / 6 Nights",
      highlights: [
        "Sigiriya Rock",
        "Train Ride in Ella",
        "Safari in Yala",
        "Beach stay in South",
      ],
    },
    {
      title: "5 Days Hill Country Escape",
      price: "$320",
      img: "/images/tours/2.jpg",
      route: "Kandy → Nuwara Eliya → Ella",
      duration: "5 Days / 4 Nights",
      highlights: [
        "Temple of the Tooth",
        "Tea Plantations",
        "Waterfalls",
        "Scenic Train Ride",
      ],
    },
    {
      title: "3 Days South Coast Tour",
      price: "$200",
      badge: "Limited Availability",
      img: "/images/tours/3.jpg",
      route: "Galle → Mirissa → Bentota",
      duration: "3 Days / 2 Nights",
      highlights: [
        "Galle Fort",
        "Whale Watching",
        "Turtle Hatchery",
        "Pristine Beaches",
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] flex items-center justify-center text-center text-white overflow-hidden rounded-[34px] mx-5 md:mx-[88px]">
        <Image
          src="/images/tours/tours-hero.jpg"
          alt="Tours Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#071a24]/65" />

        <div className="relative z-10 px-5">
          <p className="text-[#d8b62f] text-[12px] mb-2">Curated Experiences</p>

          <h1 className="font-serif text-[34px] md:text-[52px] font-bold">
            Explore Our Tour Packages
          </h1>

          <p className="text-[13px] md:text-[14px] mt-3 text-gray-200 max-w-[550px] mx-auto">
            Carefully crafted itineraries to give you the best experience of Sri
            Lanka.
          </p>

          <div className="w-[60px] h-[3px] bg-[#d8b62f] mx-auto mt-5" />
        </div>
      </section>

      {/* Cards */}
      <section
        className={`px-5 md:px-[80px] py-[60px] grid gap-[30px] ${
          desktop ? "grid-cols-3" : "grid-cols-1"
        }`}
      >
        {[...tours, ...tours].map((tour, i) => (
          <div
            key={i}
            className="bg-white rounded-[10px] overflow-hidden shadow-sm"
          >
            <div className="relative h-[180px]">
              <Image
                src={tour.img}
                alt={tour.title}
                fill
                className="object-cover"
              />

              {tour.badge && (
                <span
                  className={`absolute top-3 right-3 text-[11px] px-3 py-1 rounded-full font-bold ${
                    tour.badge === "Most Popular"
                      ? "bg-yellow-400 text-black"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {tour.badge}
                </span>
              )}
            </div>

            <div className="p-5">
              <h3 className="font-serif text-[18px] font-bold mb-1">
                {tour.title}
              </h3>

              <p className="text-[#20d969] text-[13px] font-bold mb-3">
                From {tour.price}
              </p>

              <div className="text-[12px] text-gray-500 mb-3 space-y-1">
                <p className="flex items-center gap-2">
                  <MapPin size={13} /> {tour.route}
                </p>
                <p className="flex items-center gap-2">
                  <Clock size={13} /> {tour.duration}
                </p>
              </div>

              <ul className="text-[12px] mb-4 space-y-1">
                {tour.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-[#d8b62f]">✔</span> {h}
                  </li>
                ))}
              </ul>

              <Link
                href="/ceylon_visitors_TourDetails"
                className="w-full h-[38px] bg-[#1597ff] hover:bg-[#057ddd] text-white text-[12px] font-bold rounded-[4px] flex items-center justify-center transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Floating WhatsApp */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 z-50 w-[46px] h-[46px] rounded-full bg-[#20d969] text-white flex items-center justify-center shadow-lg"
      >
        <MessageCircle size={23} />
      </a>
    </>
  );
}
