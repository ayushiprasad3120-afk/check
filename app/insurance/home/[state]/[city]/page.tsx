import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/config/services.config";
import { states, getStateBySlug } from "@/config/states.config";
import { CityPageTemplate } from "@/components/services/city-page-template";
import { buildMetadata } from "@/lib/seo/metadata";

const SERVICE_SLUG = "home";

function citySlugify(city: string) {
  return city.toLowerCase().replace(/\s+/g, "-");
}

// ISR: state/city pages regenerate at most once per hour rather than
// on every request, since underlying state/DOI data changes rarely.
export const revalidate = 3600;

export function generateStaticParams() {
  return states.flatMap((s) => s.servedCities.map((city) => ({ state: s.slug, city: citySlugify(city) })));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string; city: string }> }): Promise<Metadata> {
  const p = await params;
  const service = getServiceBySlug(SERVICE_SLUG)!;
  const state = getStateBySlug(p.state);
  const city = state?.servedCities.find((c) => citySlugify(c) === p.city);
  if (!state || !city) return {};
  return buildMetadata({
    path: `/insurance/${SERVICE_SLUG}/${p.state}/${p.city}`,
    title: `${service.name} in ${city}, ${state.abbreviation} | InsureDirect`,
    description: `Compare ${service.name.toLowerCase()} coverage options in ${city}, ${state.name}.`,
  });
}

export default async function CityPage({ params }: { params: Promise<{ state: string; city: string }> }) {
  const p = await params;
  const service = getServiceBySlug(SERVICE_SLUG)!;
  const state = getStateBySlug(p.state);
  const city = state?.servedCities.find((c) => citySlugify(c) === p.city);
  if (!state || !city) notFound();
  return <CityPageTemplate service={service} state={state} city={city} />;
}
