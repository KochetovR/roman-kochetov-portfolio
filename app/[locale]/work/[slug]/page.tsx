import { notFound } from "next/navigation";
import { WorkDetail } from "../../../components/work-detail";
import { projects } from "../../../data/projects";
import { hasLocalizedLocale } from "../../../lib/locale";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function LocalizedWorkDetailPage({ params }: PageProps<"/[locale]/work/[slug]">) {
  const { locale, slug } = await params;

  if (!hasLocalizedLocale(locale)) notFound();

  return <WorkDetail locale={locale} slug={slug} />;
}
