import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-4xl flex-row items-center justify-between p-24">
      <div className="mx-2">
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
