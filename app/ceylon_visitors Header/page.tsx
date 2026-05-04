 import Header from "@/components/ceylon_visitors Header/page";

export default function CeylonVisitorsHeaderPage() {
  return (
    <main className="bg-[#f4f4f4]">
      {/* Desktop Header */}
      <section>
        <Header desktop />
      </section>

      {/* Mobile Header */}
      <section className="max-w-[390px] mx-auto mt-10 border border-gray-300">
        <Header />
      </section>
    </main>
  );
}