import RippleButton, { RippleButtonProps } from "./RippleButton";

const LargeButton = ({ children, ...rest }: RippleButtonProps) => {
  return (
    <RippleButton
      {...rest}
      className="w-full rounded-10pxr bg-dark-primary text-dark-on-primary text-center button-b-18 py-15pxr"
    >
      {children}
    </RippleButton>
  );
};

export default LargeButton;
