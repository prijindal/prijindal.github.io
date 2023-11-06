"use client";
import { capitalize } from "lodash";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { Carousel } from "./carousel";
import { ColorGradients } from "./colors";
import { Project } from "./helpers/project";

export function ProjectModal({ project }: { project: Project }) {
  const searchParams = useSearchParams();

  const router = useRouter();

  const closeModal = useCallback(() => {
    router.push(`/projects?${searchParams.toString()}`);
  }, [router, searchParams]);

  useEffect(() => {
    let modalElement: HTMLDialogElement | null;
    if (project) {
      modalElement = document.getElementById(
        `modal-${project.id}`,
      ) as HTMLDialogElement | null;
      // modalElement?.showModal();
      modalElement?.addEventListener("close", closeModal);
    }
    return () => {
      modalElement?.removeEventListener("close", closeModal);
    };
  }, [project, closeModal]);

  return (
    <dialog id={`modal-${project.id}`} className="modal" open>
      <div className="modal-box flex flex-col items-center">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="text-xl">{project.name}</div>
        <div className="text-lg">{project.description}</div>

        <div className="justify-end">
          {project.tags.map((tag) => (
            <div key={tag} className="badge badge-outline mx-2">
              {tag}
            </div>
          ))}
        </div>

        <Carousel images={project.images} />

        <div className="flex flex-row justify-start">
          {(
            ["github", "website", "android", "builds"] as (
              | "github"
              | "website"
              | "android"
              | "builds"
            )[]
          ).map((linkType) => {
            const projectLink = project.links[linkType];
            if (projectLink) {
              return (
                <Link
                  target="_blank"
                  key={linkType}
                  href={projectLink}
                  className={`${ColorGradients.link} mx-2 p-2`}
                >
                  {capitalize(linkType)}
                </Link>
              );
            }
            return <span key={linkType}></span>;
          })}
        </div>
      </div>

      <form
        method="dialog"
        className={`modal-backdrop ${ColorGradients.translucent}`}
      >
        <button>close</button>
      </form>
    </dialog>
  );
}
