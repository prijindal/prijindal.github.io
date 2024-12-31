import { projects } from "../../../components/helpers/project";
import { ProjectModal } from "../../../components/projectmodal";
import { ProjectsList } from "../../../components/projectslist";

export async function generateStaticParams() {
  return projects.map((a) => ({ project: a.id }));
}

export default async function ProjectPage(
  props: {
    params: Promise<{ project: string }>;
  }
) {
  const params = await props.params;
  const projectId = params.project;
  const project = projects.find((p) => p.id === projectId);

  return (
    <>
      <ProjectsList />
      {projectId && project && <ProjectModal project={project} />}
    </>
  );
}
