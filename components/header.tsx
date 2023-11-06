"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ColorGradients } from "./colors";

export const Header = () => {
  const pathname = usePathname();

  console.log(pathname);

  const links = [
    { name: "About Me", link: "/" },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Resume",
      link: "/resume",
    },
    {
      name: "Contact Me",
      link: "/contact",
    },
  ];
  return (
    <div
      className={`flex h-20 w-full flex-row justify-center ${ColorGradients.header}`}
    >
      <div
        className={`flex h-full max-w-4xl flex-grow flex-row items-center justify-between ${ColorGradients.containers} p-5`}
      >
        <div className="text-xl">Priyanshu Jindal</div>

        <div className="flex flex-row">
          {links.map((link) => (
            <Link
              key={link.link}
              href={link.link}
              className={`mx-2 p-2 ${
                pathname === link.link
                  ? ColorGradients.active
                  : ColorGradients.link
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
