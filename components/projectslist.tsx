"use client";
import { intersection, isEmpty, uniq } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { Project, projects } from "./helpers/project";

const tags = uniq(projects.flatMap((a) => a.tags, []));

const TAGS_SEARCH_PARAM = "tags";

export function ProjectsList() {
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
    <div className="mx-auto flex max-w-7xl flex-row py-24">
      <div className="flex flex-col px-4">
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
      <div className="flex max-h-[32rem] flex-row flex-wrap items-center justify-start overflow-y-auto px-4">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            className="card bg-base-100 m-8 max-h-72 w-64 shadow-xl"
            href={`/projects/${project.id}?${searchParams.toString()}`}
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
