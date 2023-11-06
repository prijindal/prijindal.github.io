import Image from "next/image";
import Link from "next/link";
import { projects } from "./helpers/project";

export function ProjectsList({ projectId }: { projectId?: string }) {
  return (
    <div className="mx-auto flex max-w-4xl flex-row items-center justify-between p-24">
      {projects.map((project) => (
        <Link
          key={project.id}
          className="h-40 w-40 p-2"
          href={"/projects/f1_results"}
        >
          <Image
            src={project.defaultImage}
            alt={`Image for ${project.id}`}
            className="h-full w-full object-cover object-top"
            width={200}
            height={200}
          />
          <span className="text-lg">{project.name}</span>
        </Link>
      ))}
    </div>
  );
}
