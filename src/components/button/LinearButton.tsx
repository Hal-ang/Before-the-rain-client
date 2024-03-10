import RippleButton, { RippleButtonProps } from "./RippleButton";

const LinearButtonFrame = ({
  children,
  className,
  ...rest
}: RippleButtonProps) => {
  return (
    <RippleButton
      {...rest}
      className={`px-24pxr py-10pxr rounded-100pxr font-medium text-18pxr leading-20pxr ${className}`}
    >
      {children}
    </RippleButton>
  );
};

function withLinearButton(
  Component: (props: RippleButtonProps) => JSX.Element,
  className: string
) {
  return function EnhancedComponent(_props: RippleButtonProps) {
    return <Component {..._props} className={className} />;
  };
}

const PrimaryButton = withLinearButton(
  LinearButtonFrame,
  "text-dark-on-primary bg-dark-primary"
);

const SecondaryButton = withLinearButton(
  LinearButtonFrame,
  "text-dark-primary border border-dark-outline bg-light-on-background"
);
interface LinearButtonProps extends RippleButtonProps {
  state: "primary" | "secondary";
}

export const LinearButton = ({ state, ...props }: LinearButtonProps) => {
  if (state === "primary") {
    return <PrimaryButton {...props} />;
  } else if (state === "secondary") {
    return <SecondaryButton {...props} />;
  }
};
