import Button, { ButtonProps } from "../Button";

import React from "react";

const FixedBottomBar = (props: ButtonProps) => (
  <footer className="fixed w-full bottom-20pxr px-20pxr">
    <Button {...props} />
  </footer>
);

export default FixedBottomBar;
