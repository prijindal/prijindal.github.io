import { Projects } from "../../../components/projects";

export default function ProjectPage({
  params,
}: {
  params: { project: string };
}) {
  return <Projects projectId={params.project} />;
}
