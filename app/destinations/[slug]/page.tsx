import Image from "next/image";
import Link from "next/link";
import { MapPin, Info, ArrowLeft, MessageCircle } from "lucide-react";

// In a real app this might be fetched from a database
const destinationsData: Record<string, any> = {
  "sigiriya": {
    name: "Sigiriya",
    img: "/images/sigiriya.png",
    description: "Sigiriya, or Lion Rock, is a stunning ancient rock fortress with ruins of a palace at the top, beautiful frescoes, and landscaped gardens. It's a UNESCO World Heritage site and one of Sri Lanka's most iconic landmarks.",
    explore: [
      "Climb the 1,200 steps to the summit",
      "See the ancient 'Maidens of the Clouds' frescoes",
      "Walk through the intricate Water Gardens",
      "Visit the nearby Pidurangala Rock for sunset"
    ]
  },
  "nuwara-eliya": {
    name: "Nuwara Eliya",
    img: "/images/tea.png",
    description: "Often referred to as 'Little England', Nuwara Eliya is the heart of Sri Lanka's tea country. It features a cool climate, colonial-era architecture, and endless rolling hills covered in vibrant green tea plantations.",
    explore: [
      "Take a guided tour of a tea factory and estate",
      "Stroll around the scenic Gregory Lake",
      "Visit the beautiful Victoria Park",
      "Hike through Horton Plains National Park"
    ]
  },
  "kandy": {
    name: "Kandy",
    img: "/images/temple.png",
    description: "Kandy is the cultural capital of Sri Lanka and home to the sacred Temple of the Tooth Relic. Surrounded by hills and centered around a magnificent lake, it offers a blend of history, religion, and natural beauty.",
    explore: [
      "Visit the Temple of the Sacred Tooth Relic",
      "Take a peaceful walk around Kandy Lake",
      "Explore the Royal Botanical Gardens in Peradeniya",
      "Watch a traditional Kandyan cultural dance show"
    ]
  },
  "bentota": {
    name: "Bentota",
    img: "/images/beach.png",
    description: "Bentota is a premier coastal resort town famous for its golden sandy beaches and calm waters. It's the perfect destination for water sports enthusiasts and those looking to simply relax by the Indian Ocean.",
    explore: [
      "Enjoy water sports like jet skiing and windsurfing",
      "Take a boat safari on the Madu River",
      "Visit the local turtle hatcheries",
      "Relax on the expansive golden beach"
    ]
  },
  "mirissa": {
    name: "Mirissa",
    img: "/images/mirissa.png",
    description: "Mirissa is a vibrant coastal town on the southern coast, famous for its relaxed vibe, stunning crescent beach, and as one of the best locations in the world for whale watching.",
    explore: [
      "Go on a whale and dolphin watching cruise",
      "Capture photos at the famous Coconut Tree Hill",
      "Enjoy fresh seafood at beachside restaurants",
      "Surf or paddleboard in the warm waters"
    ]
  },
  "yala": {
    name: "Yala",
    img: "/images/yala.png",
    description: "Yala National Park is Sri Lanka's most popular wildlife destination, renowned for having one of the highest leopard densities in the world, along with elephants, sloth bears, and diverse birdlife.",
    explore: [
      "Take an early morning or afternoon Jeep safari",
      "Spot the elusive Sri Lankan leopard",
      "Observe wild elephants and crocodiles in their natural habitat",
      "Camp overnight near the park boundaries"
    ]
  }
};

export default async function DestinationPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const destination = destinationsData[slug];

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f4f4] px-5 text-center">
        <h1 className="text-3xl font-serif text-[#071a24] font-bold mb-4">Destination not found</h1>
        <p className="text-gray-600 mb-8">We couldn't find the location you're looking for.</p>
        <Link href="/" className="px-6 py-3 bg-[#d8a51d] text-white rounded-md font-medium hover:bg-[#c29318] transition">
          Return Home
        </Link>
      </div>
    );
  }

  const whatsappNumber = "94771303301";
  const whatsappMessage = `Hello, I would like to know more about visiting ${destination.name}.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main className="bg-[#f4f4f4] min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full">
        <Image
          src={destination.img}
          alt={destination.name}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-lg mb-4">
            {destination.name}
          </h1>
          <div className="w-[60px] h-[3px] md:w-[80px] md:h-[4px] bg-[#d8a51d] rounded-full mx-auto" />
        </div>
        
        <Link href="/" className="absolute top-6 left-6 flex items-center gap-2 text-white bg-black/30 hover:bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm transition">
          <ArrowLeft size={18} />
          <span className="font-medium text-sm">Back to Home</span>
        </Link>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-5 md:px-8 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Description */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4 text-[#d8a51d]">
                <Info size={24} />
                <h2 className="text-2xl font-serif font-bold text-[#071a24]">About {destination.name}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-[15px] md:text-[16px]">
                {destination.description}
              </p>
              
              <div className="mt-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#10d65c] hover:bg-[#0fc955] text-white px-6 py-3 rounded-lg font-medium transition shadow-md w-full md:w-auto"
                >
                  <MessageCircle size={20} />
                  Inquire about {destination.name}
                </a>
              </div>
            </div>

            {/* Things to explore */}
            <div className="flex-1 bg-[#f9f9f9] rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-4 text-[#d8a51d]">
                <MapPin size={24} />
                <h2 className="text-xl font-serif font-bold text-[#071a24]">What to Explore</h2>
              </div>
              <ul className="space-y-4">
                {destination.explore.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="min-w-[8px] max-w-[8px] h-[8px] mt-2 rounded-full bg-[#d8a51d]" />
                    <span className="text-gray-700 text-[14px] md:text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </section>

      {/* Floating WhatsApp fixed button for mobile mostly */}
      <a
        href="https://wa.me/94771303301?text=Hello,%20I%20would%20like%20to%20book%20a%20Sri%20Lanka%20tour."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed md:hidden right-5 bottom-5 z-50 w-[50px] h-[50px] rounded-full bg-[#10d65c] hover:bg-[#0fc955] text-white flex items-center justify-center shadow-lg transition"
      >
        <MessageCircle size={26} strokeWidth={2} />
      </a>
    </main>
  );
}