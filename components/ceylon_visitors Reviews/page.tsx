import Image from "next/image";
import { Star, Globe2, Medal, MessageCircle } from "lucide-react";

export default function CeylonVisitorsReviews() {
  return (
    <main className="bg-[#f4f4f4] text-[#071a24]">
      {/* ================= DESKTOP VIEW ================= */}
      <section className="hidden md:block">
        <ReviewsPage desktop />
      </section>

      {/* ================= MOBILE VIEW ================= */}
      <section className="block md:hidden">
        <ReviewsPage />
      </section>
    </main>
  );
}

function ReviewsPage({ desktop = false }: { desktop?: boolean }) {
  const reviews = [
    {
      text: "Amazing experience from start to finish! Our driver was incredibly knowledgeable about the local history and always knew the best spots for photos.",
      name: "Michael & Sarah",
      country: "United Kingdom",
    },
    {
      text: "Driver was friendly and very professional. The vehicle was always clean and air-conditioned, which was a lifesaver in the heat. Highly recommended!",
      name: "James Chen",
      country: "Singapore",
    },
    {
      text: "We booked a 7-day tour and it was flawless. They accommodated all our last-minute changes with a smile. The best way to see Sri Lanka.",
      name: "Emma Watson",
      country: "Australia",
    },
    {
      text: "Very safe driving on tricky mountain roads. We felt completely at ease the entire trip. Great value for the exceptional service provided.",
      name: "Lukas Müller",
      country: "Germany",
    },
    {
      text: "Communication via WhatsApp was so easy. They met us at the airport exactly on time. A stress-free start to our holiday.",
      name: "Sophie Martin",
      country: "France",
    },
    {
      text: "Traveling with kids can be tough, but our driver made it so easy. He knew where to stop for clean restrooms and good food. Thank you!",
      name: "The Johnson Family",
      country: "USA",
    },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[420px] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/images/Reviews/reviews-hero.jpg"
          alt="Reviews hero"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#071a24]/65" />

        <div className="relative z-10 px-5">
          <p className="text-[#d8b62f] text-[12px] font-semibold mb-3">
            Testimonials
          </p>

          <h1 className="font-serif text-[38px] md:text-[52px] font-bold leading-tight">
            What Our Customers Say
          </h1>

          <p className="text-[13px] md:text-[14px] max-w-[560px] mx-auto mt-4 leading-[22px] text-gray-200">
            Don&apos;t just take our word for it. Read about the experiences of
            travelers who chose Ceylon Visitors.
          </p>

          <div className="w-[70px] h-[3px] bg-[#d8b62f] mx-auto mt-6" />
        </div>
      </section>

      {/* ================= REVIEWS CONTENT ================= */}
      <section id="reviews" className="relative px-5 md:px-[75px] py-[65px]">
        {/* Badges */}
        <div
          className={`grid gap-5 max-w-[700px] mx-auto mb-[60px] ${
            desktop ? "grid-cols-3" : "grid-cols-1"
          }`}
        >
          <Badge icon={<Star size={17} fill="currentColor" />} text="5-Star Rated" />
          <Badge icon={<Globe2 size={17} />} text="International Travelers" />
          <Badge icon={<Medal size={17} />} text="Trusted Service" />
        </div>

        {/* Review Cards */}
        <div className={`grid gap-[30px] ${desktop ? "grid-cols-3" : "grid-cols-1"}`}>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative bg-white rounded-[8px] px-[30px] py-[28px] min-h-[205px] shadow-sm"
            >
              <div className="flex text-[#d8b62f] mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              <span className="absolute right-6 top-5 text-[60px] leading-none text-gray-100 font-serif">
                ”
              </span>

              <p className="relative z-10 text-[13px] leading-[20px] text-[#273444] mb-6">
                &quot;{review.text}&quot;
              </p>

              <h4 className="text-[13px] font-bold text-[#071a24]">
                {review.name}
              </h4>
              <p className="text-[11px] italic text-gray-500">{review.country}</p>
            </div>
          ))}
        </div>

        {/* Floating WhatsApp */}
        <a
          href="https://wa.me/94713807185"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-8 bottom-8 z-50 w-[45px] h-[45px] rounded-full bg-[#20d969] hover:bg-[#18c75e] text-white flex items-center justify-center shadow-lg transition"
        >
          <MessageCircle size={23} />
        </a>
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