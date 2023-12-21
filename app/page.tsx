"use client";
import { breakpoints } from "@/components/colors";
import { useWindowWidth } from "@/components/helpers/window";
import Image from "next/image";

export default function Home() {
  const width = useWindowWidth();

  return (
    <div
      className={`mx-auto flex max-w-4xl ${
        width <= breakpoints.layout ? "flex-col" : "flex-row"
      } items-center justify-between p-24`}
    >
      <div className="mx-2 mb-5 max-w-80">
        <Image
          alt="prijindal profile pic"
          src="https://avatars.githubusercontent.com/u/10034872?v=4"
          width={"500"}
          height={"500"}
          className="rounded-full"
        />
      </div>
      <div className="mx-2 max-w-lg">
        I am a web developer in India, with expertise in both Front and back end
        and cross platform application development.
      </div>
    </div>
  );
}
