import { ColorGradients } from "@/components/colors";
import Link from "next/link";
import { FaGithub, FaMailBulk, FaTwitter } from "react-icons/fa";

export const Footer = () => {
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
  return (
    <footer
      className={`flex h-20 w-full flex-row justify-center ${ColorGradients.header}`}
    >
      <div
        className={`flex h-full max-w-4xl flex-grow flex-row items-center justify-between ${ColorGradients.containers} p-5`}
      >
        {links.map((link) => (
          <Link
            key={link.link}
            href={link.link}
            target="_blank"
            className={`flex flex-row items-center ${ColorGradients.link} p-2`}
          >
            <span className="mr-2">{link.icon}</span>
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
    </footer>
  );
};
