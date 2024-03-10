import BottomBar from "./BottomBar";
import React from "react";
import { RippleButtonProps } from "../button/RippleButton";

const FixedBottomBar = (props: RippleButtonProps) => (
  <footer className="fixed w-full bottom-20pxr px-20pxr">
    <BottomBar {...props} />
  </footer>
);

export default FixedBottomBar;
