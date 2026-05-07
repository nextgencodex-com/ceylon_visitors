import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#f4f4f4] py-16 px-5 md:px-20 text-[#071a24]">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
        <Link href="/" className="inline-flex items-center gap-2 text-[#d8a51d] font-medium hover:text-[#071a24] transition mb-8">
          <ArrowLeft size={18} /> Back to Home
        </Link>
        
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-[16px]">
          <p>
            Welcome to Ceylon Visitors. By accessing our website or booking a tour through us, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="font-serif text-xl font-bold text-[#071a24] pt-4">1. Booking and Payments</h2>
          <p>
            All bookings are subject to availability. To secure your reservation, a deposit or full payment may be required as agreed upon during travel coordination. We transparently outline what is included and excluded before finalizing your itinerary.
          </p>

          <h2 className="font-serif text-xl font-bold text-[#071a24] pt-4">2. Cancellations and Refunds</h2>
          <p>
            Cancellations made a specified number of days before the travel date may qualify for a partial or full refund depending on the agreements with third-party service providers (such as hotels and specific experiences). Cancellation policies will be provided prior to booking.
          </p>

          <h2 className="font-serif text-xl font-bold text-[#071a24] pt-4">3. Changes to Itineraries</h2>
          <p>
            While we strive to follow your requested itinerary perfectly, unforeseen circumstances such as weather, local disruptions, or road conditions might necessitate adjustments. Our chauffeurs will always prioritize your safety and experience.
          </p>

          <h2 className="font-serif text-xl font-bold text-[#071a24] pt-4">4. Liability</h2>
          <p>
            Ceylon Visitors is not liable for injury, loss, or damage to personal property during the tours. We highly recommend all travelers acquire comprehensive travel insurance before arriving in Sri Lanka.
          </p>
        </div>
      </div>
    </main>
  );
}