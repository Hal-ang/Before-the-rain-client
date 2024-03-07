import React, { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef(
  ({ className, ...rest }: InputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input
      ref={ref}
      className={`py-10pxr text-center text-45pxr leading-47pxr font-regular rounded-8pxr bg-dark-surface-container-highest text-dark-on-surface focus:border-2pxr focus:border-dark-primary focus:bg-dark-primary-container focus:text-dark-primary focus:caret-dark-primary ${className}`}
      {...rest}
    />
  )
);

export default Input;
