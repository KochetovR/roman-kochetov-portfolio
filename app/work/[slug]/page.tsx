import type { Metadata } from "next";
import { WorkDetail } from "../../components/work-detail";
import { projects } from "../../data/projects";
import { createCaseStudyMetadata } from "../../lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;

  return createCaseStudyMetadata("en", slug);
}

export default async function WorkDetailPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;

  return <WorkDetail locale="en" slug={slug} />;
}
