"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export function Projects({ projectId }: { projectId?: string }) {
  const router = useRouter();

  const closeModal = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    let modalElement: HTMLDialogElement | null;
    if (projectId) {
      modalElement = document.getElementById(
        `modal-${projectId}`,
      ) as HTMLDialogElement | null;
      modalElement?.showModal();
      modalElement?.addEventListener("close", closeModal);
    }
    return () => {
      modalElement?.removeEventListener("close", closeModal);
    };
  }, [projectId, closeModal]);

  return (
    <div className="mx-auto flex max-w-4xl flex-row items-center justify-between p-24">
      <Link className="w-20 p-2" href={"/projects/f1_results"}>
        <Image
          src="/projects/f1_results_1.jpg"
          alt="Image for project"
          width={200}
          height={200}
        />
        <span className="text-lg">F1 Results</span>
      </Link>
      {projectId && (
        <dialog id={`modal-${projectId}`} className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div>Project: F1 Results</div>
          </div>

          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      )}
    </div>
  );
}
