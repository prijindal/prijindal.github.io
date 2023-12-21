"use client";
import React from "react";
import { ColorGradients } from "./colors";

const MobileAppDrawer: React.FunctionComponent<
  React.PropsWithChildren<{
    open: boolean;
    setOpen: (state: boolean) => void;
  }>
> = (props) => {
  const { children, open, setOpen } = props;
  return (
    <>
      <div
        className={`${
          open ? "absolute" : "hidden"
        } left-0 top-0 z-20 block h-full w-full cursor-pointer bg-black/20`}
        onClick={() => setOpen(false)}
      />
      <div
        className={`${
          open ? "absolute" : "hidden"
        }  shadow-subtle left-0 top-0 z-20 block h-full ${
          ColorGradients.background
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default MobileAppDrawer;
