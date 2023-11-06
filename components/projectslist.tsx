import { uniq } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./helpers/project";

export function ProjectsList() {
  const tags = uniq(projects.flatMap((a) => a.tags, []));

  return (
    <div className="mx-auto flex max-w-4xl flex-row py-24">
      <div className="flex flex-col px-4">
        <div className="text-lg">Filters</div>
        <div>
          {tags.map((tag) => (
            <div key={tag} className="badge">
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center justify-between px-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            className="card bg-base-100 mx-8 max-h-80 w-80 shadow-xl"
            href={`/projects/${project.id}`}
          >
            <figure
              style={{ alignItems: "flex-start" }} // overriding .card figure styles
            >
              <Image
                className="h-full w-full object-cover object-top"
                src={project.images[0]}
                alt={`Image for ${project.id}`}
                width={320}
                height={320}
              />
            </figure>
            <div className="card-body">
              <span className="card-title">{project.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
