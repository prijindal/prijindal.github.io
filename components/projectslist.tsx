"use client";
import { intersection, isEmpty, uniq } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { breakpoints } from "./colors";
import { Project, projects } from "./helpers/project";
import { useWindowWidth } from "./helpers/window";

const tags = uniq(projects.flatMap((a) => a.tags, []));

const TAGS_SEARCH_PARAM = "tags";

export function ProjectsList() {
  const width = useWindowWidth();
  const searchParams = useSearchParams();

  const existingActiveTagsStr = searchParams.get(TAGS_SEARCH_PARAM);

  const existingTags = existingActiveTagsStr?.split(",") || [];

  const activeTags = existingTags.filter((a) => !isEmpty(a));

  const filteredProjects: Project[] = useMemo(() => {
    if (activeTags.length === 0) {
      return projects;
    }
    return projects.filter((project) => {
      return intersection(project.tags, activeTags).length > 0;
    });
  }, [activeTags]);

  const getTagLink = useCallback(
    (tag: string) => {
      const newTags =
        activeTags.indexOf(tag) >= 0
          ? activeTags.filter((a) => a != tag)
          : [...activeTags, tag];

      const params = new URLSearchParams(searchParams);
      params.set(TAGS_SEARCH_PARAM, newTags.join(","));

      return `/projects?${params.toString()}`;
    },
    [activeTags, searchParams],
  );

  return (
    <div
      className={`mx-10 flex max-w-full ${
        width > breakpoints.projects ? "flex-row" : "flex-col"
      } pt-24`}
    >
      <div
        className={`flex ${
          width > breakpoints.projects ? "max-w-xs" : "max-w-6xl"
        } flex-col px-4`}
      >
        <div className="text-lg">Filters</div>
        <div>
          {tags.map((tag) => (
            <Link
              key={tag}
              className={`badge m-1 ${
                activeTags.indexOf(tag) >= 0 ? "badge-primary" : "badge-neutral"
              }`}
              href={getTagLink(tag)}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex max-h-[40rem] flex-row flex-wrap items-center justify-start overflow-y-auto px-4">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            className="card m-8 max-h-72 w-64 bg-base-100 shadow-xl"
            href={`/projects/${project.id}?${searchParams.toString()}`}
          >
            {project.images.length > 0 && (
              <figure
                style={{ alignItems: "flex-start" }} // overriding .card figure styles
              >
                <Image
                  className="h-auto w-auto object-cover object-top"
                  src={project.images[0]}
                  alt={`Image for ${project.id}`}
                  width={256}
                  height={256}
                />
              </figure>
            )}
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <div className="card-actions justify-end">
                {project.tags.slice(0, 2).map((tag) => (
                  <div key={tag} className="badge badge-outline">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
