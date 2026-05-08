"use client";

import Image from "next/image";
import { Camera, Globe2, Image as ImageIcon, X, ZoomIn } from "lucide-react";
import { useState } from "react";

export default function CeylonVisitorsGallery() {
  return (
    <main className="bg-[#f4f4f4] text-[#071a24]">
      {/* ================= DESKTOP VIEW ================= */}
      <section className="hidden md:block">
        <GalleryPage desktop />
      </section>

      {/* ================= MOBILE VIEW ================= */}
      <section className="block md:hidden">
        <GalleryPage />
      </section>
    </main>
  );
}

function GalleryPage({ desktop = false }: { desktop?: boolean }) {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  const galleryImages = [
    { src: "/images/sigiriya.png", alt: "Sigiriya Rock", height: "h-[300px]" },
    { src: "/images/beach.png", alt: "Sri Lankan Beaches", height: "h-[450px]" },
    { src: "/images/tea.png", alt: "Tea Plantations", height: "h-[350px]" },
    { src: "/images/tours/1.jpg", alt: "Cultural Tour", height: "h-[400px]" },
    { src: "/images/yala.png", alt: "Yala Wildlife", height: "h-[300px]" },
    { src: "/images/mirissa.png", alt: "Mirissa Coast", height: "h-[450px]" },
    { src: "/images/tours/2.jpg", alt: "Scenic Train Ride", height: "h-[350px]" },
    { src: "/images/temple.png", alt: "Ancient Temples", height: "h-[300px]" },
    { src: "/images/tours/3.jpg", alt: "Nature and Wildlife", height: "h-[400px]" }
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[420px] flex items-center justify-center text-center text-white overflow-hidden rounded-[34px] mx-5 md:mx-[88px]">
        <Image
          src="/images/beach.png"
          alt="Gallery hero"
          fill
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#071a24]/65" />

        <div className="relative z-10 px-5">
          <p className="text-[#d8b62f] text-[12px] font-semibold mb-3">
            Our Portfolio
          </p>

          <h1 className="font-serif text-[38px] md:text-[52px] font-bold leading-tight">
            Tour Gallery
          </h1>

          <p className="text-[13px] md:text-[14px] max-w-[560px] mx-auto mt-4 leading-[22px] text-gray-200">
            Explore the stunning landscapes, wildlife, and cultural heritage of Sri Lanka through our collection of memories.
          </p>

          <div className="w-[70px] h-[3px] bg-[#d8b62f] mx-auto mt-6" />
        </div>
      </section>

      {/* ================= GALLERY CONTENT ================= */}
      <section id="gallery" className="relative px-5 md:px-[75px] py-[65px]">
        {/* Badges */}
        <div
          className={`grid gap-5 max-w-[700px] mx-auto mb-[60px] ${
            desktop ? "grid-cols-3" : "grid-cols-1"
          }`}
        >
          <Badge icon={<Camera size={17} />} text="Beautiful Scenery" />
          <Badge icon={<Globe2 size={17} />} text="Explore Nature" />
          <Badge icon={<ImageIcon size={17} />} text="Memorable Moments" />
        </div>

        {/* Image Grid - Masonry Layout */}
        <div className={`columns-1 ${desktop ? "md:columns-3" : "sm:columns-2"} gap-5 space-y-5`}>
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative rounded-[15px] overflow-hidden group shadow-md break-inside-avoid cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <div className={`relative ${img.height} w-full`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#071a24]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <div className="w-[50px] h-[50px] rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ZoomIn className="text-white" size={24} />
                  </div>
                  <p className="text-white font-serif font-bold tracking-wide translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    {img.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 md:p-10"
               onClick={() => setSelectedImage(null)}>
            <button 
              className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X size={36} />
            </button>

            <div 
              className="relative w-full max-w-[1000px] h-[60vh] md:h-[80vh] rounded-[20px] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
                <h3 className="text-white text-center font-serif text-[24px] font-bold">
                  {selectedImage.alt}
                </h3>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="bg-white h-[38px] rounded-full flex items-center justify-center gap-3 text-[13px] font-bold text-[#071a24] shadow-sm">
      <span className="text-[#d8b62f]">{icon}</span>
      {text}
    </div>
  );
}
