import { projects } from "../../../components/helpers/project";
import { ProjectModal } from "../../../components/projectmodal";
import { ProjectsList } from "../../../components/projectslist";

export async function generateStaticParams() {
  return projects.map((a) => ({ project: a.id }));
}

export default function ProjectPage({
  params,
}: {
  params: { project: string };
}) {
  const projectId = params.project;
  const project = projects.find((p) => p.id === projectId);

  return (
    <>
      <ProjectsList />
      {projectId && project && <ProjectModal project={project} />}
    </>
  );
}
