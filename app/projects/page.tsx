import { Suspense } from "react";
import { ProjectsList } from "../../components/projectslist";

export default function ProjectsPage() {
  return (
    <Suspense>
      <ProjectsList />
    </Suspense>
  );
}
