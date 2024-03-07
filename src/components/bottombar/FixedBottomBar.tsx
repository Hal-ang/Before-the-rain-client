import Button, { BottomBarProps } from "./BottomBar";

import React from "react";

const FixedBottomBar = (props: BottomBarProps) => (
  <footer className="fixed w-full bottom-20pxr px-20pxr">
    <Button {...props} />
  </footer>
);

export default FixedBottomBar;
