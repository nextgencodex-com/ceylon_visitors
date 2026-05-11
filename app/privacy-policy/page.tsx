import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#f4f4f4] py-16 px-5 md:px-20 text-[#071a24]">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
        <Link href="/" className="inline-flex items-center gap-2 text-[#d8a51d] font-medium hover:text-[#071a24] transition mb-8">
          <ArrowLeft size={18} /> Back to Home
        </Link>
        
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-[16px]">
          <p>
            At Ceylon Visitors, protecting your privacy is our priority. This Privacy Policy details how we collect, use, and protect your personal information when you use our website or book our services.
          </p>

          <h2 className="font-serif text-xl font-bold text-[#071a24] pt-4">1. Information We Collect</h2>
          <p>
            When you inquire about our tours or submit a booking, we may ask for your name, email address, phone number, flight details, and any other relevant preferences necessary to organize your travel across Sri Lanka.
          </p>

          <h2 className="font-serif text-xl font-bold text-[#071a24] pt-4">2. How We Use Your Information</h2>
          <p>
            We use the information collected solely to arrange your personalized tours, communicate with you regarding your itinerary, provide customer support (especially via WhatsApp), and improve your overall experience with our services.
          </p>

          <h2 className="font-serif text-xl font-bold text-[#071a24] pt-4">3. Data Security and Sharing</h2>
          <p>
            We employ robust security measures to protect your data. Your personal information will not be sold, traded, or shared with third parties without your prior consent, except where required by law or necessary to fulfill your booked tour services (like hotels or drivers).
          </p>

          <h2 className="font-serif text-xl font-bold text-[#071a24] pt-4">4. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us directly at <a href="mailto:ceylonvisitortours@gmail.com" className="font-medium text-[#d8a51d] hover:underline">ceylonvisitortours@gmail.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}