import { WorkDetail } from "../../components/work-detail";
import { projects } from "../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function WorkDetailPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;

  return <WorkDetail locale="en" slug={slug} />;
}
