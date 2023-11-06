"use client";
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
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="text-xl">{project.name}</div>
        <div className="text-lg">{project.description}</div>
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
