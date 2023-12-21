"use client";
import { ColorGradients, breakpoints } from "@/components/colors";
import Link from "next/link";
import { FaGithub, FaMailBulk, FaTwitter } from "react-icons/fa";
import { useWindowWidth } from "./helpers/window";

const links = [
  {
    icon: <FaGithub />,
    name: "@prijindal",
    link: "https://github.com/prijindal",
  },
  {
    icon: <FaTwitter />,
    name: "@prijindal",
    link: "https://twitter.com/prijindal",
  },
  {
    icon: <FaMailBulk />,
    name: "priyanshujindal1995@gmail.com",
    link: "mailto:priyanshujindal1995@gmail.com",
  },
];

export const Links = () => {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.link}
          href={link.link}
          target="_blank"
          className={`my-2 flex flex-row items-center ${ColorGradients.link} p-2`}
        >
          <span className="mr-2">{link.icon}</span>
          <span>{link.name}</span>
        </Link>
      ))}
    </>
  );
};

export const Footer = () => {
  const width = useWindowWidth();
  return (
    <footer
      className={`flex w-full flex-row justify-center ${ColorGradients.header}`}
    >
      <div
        className={`flex h-full max-w-4xl flex-grow ${
          width > breakpoints.layout ? "flex-row" : "flex-col"
        } items-center justify-between ${ColorGradients.containers} p-5`}
      >
        <Links />
      </div>
    </footer>
  );
};
