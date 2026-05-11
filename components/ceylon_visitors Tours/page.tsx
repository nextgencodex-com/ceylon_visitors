"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, MessageCircle } from "lucide-react";
import { toursData } from "@/data/tours";

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
  const tours = toursData.map((tour) => {
    // Generate highlights dynamically from the itinerary or description
    const highlights = tour.itinerary?.length > 0 
      ? tour.itinerary.slice(0, 4).map((i) => i.location.split(' to ').pop() || i.location)
      : ["Perfect blend of heritage and culture", "Scenic landscapes", "Cultural immersion", "Memorable journey"];

    let badge = "";
    if (tour.title === "Hill country Tour") badge = "Most Popular";
    if (tour.title === "Classic Sri Lanka Tour") badge = "Must Try";

    return {
      id: tour.id,
      title: tour.title,
      badge,
      img: tour.images?.[0] || "/images/tours/1.jpg",
      duration: tour.duration,
      highlights,
    };
  });

  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] flex items-center justify-center text-center text-white overflow-hidden rounded-[34px] mx-5 md:mx-[88px]">
        <Image
          src="/images/tours/tours-hero.jpg"
          alt="Tours Hero"
          fill
          className="object-cover"
          sizes="100vw"
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
        {tours.map((tour, i) => (
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
                sizes="(max-width: 768px) 100vw, 33vw"
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

              <div className="text-[12px] text-gray-500 mb-3 mt-3 space-y-1">
                <p className="flex items-center gap-2 font-medium text-black">
                  <Clock size={15} className="text-[#d8b62f]" /> {tour.duration}
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
                href={`/ceylon_visitors_TourDetails/${tour.id}`}
                className="w-full h-[38px] bg-[#1597ff] hover:bg-[#057ddd] text-white text-[12px] font-bold rounded-[4px] flex items-center justify-center transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
