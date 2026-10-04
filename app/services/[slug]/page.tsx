import ServiceDetailClient from "./ServiceDetailClient";
import { servicesData } from "../../data/servicesData";

// ✅ 1. Static export params
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// ✅ 2. Page component
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ServiceDetailClient slug={slug} />;
}