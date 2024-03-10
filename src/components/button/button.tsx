import RippleButton, { RippleButtonProps } from "./RippleButton";

const Button = ({ children, className, ...rest }: RippleButtonProps) => {
  return (
    <RippleButton
      {...rest}
      className={`px-24pxr py-10pxr rounded-100pxr font-medium text-18pxr leading-20pxr ${className}`}
    >
      {children}
    </RippleButton>
  );
};

function withButton(
  Component: (props: RippleButtonProps) => JSX.Element,
  className: string
) {
  return function EnhancedComponent(_props: RippleButtonProps) {
    return <Component {..._props} className={className} />;
  };
}

export const PrimaryButton = withButton(
  Button,
  "text-dark-on-primary bg-dark-primary"
);

export const SecondaryButton = withButton(
  Button,
  "text-dark-primary border border-dark-outline"
);
