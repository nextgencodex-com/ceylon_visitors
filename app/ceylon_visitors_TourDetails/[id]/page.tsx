import CeylonVisitorsTourDetails from "@/components/ceylon_visitors_TourDetails/page";
import { toursData } from "@/data/tours";

export async function generateStaticParams() {
  return toursData.map((tour) => ({
    id: tour.id,
  }));
}

export default async function TourDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const tourId = resolvedParams.id;
  const tourIndex = toursData.findIndex((t) => t.id === tourId);
  const tour = toursData[tourIndex];

  if (!tour) {
    return <div className="text-center py-20 text-2xl">Tour not found</div>;
  }

  return <CeylonVisitorsTourDetails tour={tour} />;
}