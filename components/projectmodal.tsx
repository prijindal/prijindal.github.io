"use client";
import { capitalize } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { ColorGradients } from "./colors";
import { Project } from "./helpers/project";

export function ProjectModal({ project }: { project: Project }) {
  const router = useRouter();

  const closeModal = useCallback(() => {
    router.back();
  }, [router]);

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

        <div className="carousel my-4 max-h-96 w-96">
          {project.images.map((image, i) => (
            <div
              key={image}
              id={`slide-${project.id}-${i}`}
              className="carousel-item relative w-full"
            >
              <Image
                width={500}
                height={500}
                src={image}
                alt={`Image ${i} for ${project.id}`}
                className="w-full object-cover object-top"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href={`#slide-${project.id}-${
                    i >= 1 ? i - 1 : project.images.length - 1
                  }`}
                  className="btn btn-circle"
                >
                  ❮
                </a>
                <a
                  href={`#slide-${project.id}-${
                    i < project.images.length - 1 ? i + 1 : 0
                  }`}
                  className="btn btn-circle"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>

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
            return <></>;
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
