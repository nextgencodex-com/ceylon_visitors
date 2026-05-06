import Footer from "@/components/ceylon_visitors Footer/page";

export default function FooterPage() {
  return (
    <main className="bg-[#f4f4f4]">
      {/* Desktop Footer */}
      <section>
        <Footer desktop />
      </section>

      {/* Mobile Footer */}
      <section className="max-w-[390px] mx-auto mt-20 border border-gray-300">
        <Footer />
      </section>
    </main>
  );
}
