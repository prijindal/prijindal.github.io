import { uniq } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./helpers/project";

export function ProjectsList() {
  const tags = uniq(projects.flatMap((a) => a.tags, []));

  return (
    <div className="mx-auto flex max-w-7xl flex-row py-24">
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
      <div className="flex max-h-[32rem] flex-row flex-wrap items-center justify-start overflow-y-auto px-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            className="card bg-base-100 m-8 max-h-72 w-64 shadow-xl"
            href={`/projects/${project.id}`}
          >
            <figure
              style={{ alignItems: "flex-start" }} // overriding .card figure styles
            >
              <Image
                className="h-full w-full object-cover object-top"
                src={project.images[0]}
                alt={`Image for ${project.id}`}
                width={256}
                height={256}
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
