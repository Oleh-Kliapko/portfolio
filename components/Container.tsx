import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  containerStyle?: string;
  as?: React.ElementType;
}

export const Container: FC<ContainerProps> = ({
  children,
  containerStyle,
  as: Component = "div",
}) => {
  return (
    <Component
      className={`px-24 xl:px-40 max-sm:px-16 ${
        containerStyle ? containerStyle : ""
      }`}
    >
      {children}
    </Component>
  );
};
