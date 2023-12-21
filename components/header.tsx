"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "react-daisyui";
import { FaBars } from "react-icons/fa";
import { ColorGradients, breakpoints } from "./colors";
import { useWindowWidth } from "./helpers/window";
import MobileAppDrawer from "./mobileappdrawer";

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

export const Links = ({
  pathname,
  onLinkPress,
}: {
  pathname: string;
  onLinkPress?: (pathname: string) => void;
}) => {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.link}
          href={link.link}
          className={`mx-2 p-2 ${
            pathname === link.link ? ColorGradients.active : ColorGradients.link
          }`}
          onClick={(e) => {
            if (onLinkPress) {
              onLinkPress(pathname);
            }
          }}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export const Header = () => {
  const pathname = usePathname();
  const width = useWindowWidth();
  const [open, setOpen] = useState(false);
  return (
    <header
      className={`flex h-20 w-full flex-row justify-center ${ColorGradients.header}`}
    >
      <div
        className={`flex h-full max-w-4xl flex-grow flex-row items-center justify-between ${ColorGradients.containers} p-5`}
      >
        <div className="text-xl">
          {width <= breakpoints.layout && (
            <Button className="mr-2" onClick={() => setOpen(true)}>
              <FaBars />
            </Button>
          )}
          Priyanshu Jindal
        </div>
        {width <= breakpoints.layout ? (
          <MobileAppDrawer open={open} setOpen={setOpen}>
            <div className="flex h-full w-80 flex-col justify-start p-2">
              <Links pathname={pathname} onLinkPress={() => setOpen(false)} />
            </div>
          </MobileAppDrawer>
        ) : (
          <div className="flex flex-row">
            <Links pathname={pathname} />
          </div>
        )}
      </div>
    </header>
  );
};
