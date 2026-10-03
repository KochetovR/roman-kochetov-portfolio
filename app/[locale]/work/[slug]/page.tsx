import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkDetail } from "../../../components/work-detail";
import { projects } from "../../../data/projects";
import { hasLocalizedLocale } from "../../../lib/locale";
import { createCaseStudyMetadata } from "../../../lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/work/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;

  return hasLocalizedLocale(locale) ? createCaseStudyMetadata(locale, slug) : { robots: { index: false, follow: false } };
}

export default async function LocalizedWorkDetailPage({ params }: PageProps<"/[locale]/work/[slug]">) {
  const { locale, slug } = await params;

  if (!hasLocalizedLocale(locale)) notFound();

  return <WorkDetail locale={locale} slug={slug} />;
}
