import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/config/services.config";
import { states, getStateBySlug } from "@/config/states.config";
import { StatePageTemplate } from "@/components/services/state-page-template";
import { buildMetadata } from "@/lib/seo/metadata";

const SERVICE_SLUG = "home";

// ISR: state/city pages regenerate at most once per hour rather than
// on every request, since underlying state/DOI data changes rarely.
export const revalidate = 3600;

export function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const p = await params;
  const service = getServiceBySlug(SERVICE_SLUG)!;
  const state = getStateBySlug(p.state);
  if (!state) return {};
  return buildMetadata({
    path: `/insurance/${SERVICE_SLUG}/${p.state}`,
    title: `${service.name} in ${state.name} | InsureDirect`,
    description: `Compare ${service.name.toLowerCase()} coverage options in ${state.name} and connect with a licensed agent.`,
  });
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const p = await params;
  const service = getServiceBySlug(SERVICE_SLUG)!;
  const state = getStateBySlug(p.state);
  if (!state) notFound();
  return <StatePageTemplate service={service} state={state} />;
}
