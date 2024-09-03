import React from "react";

export interface ILabelProps {
  className?: string;
  children: any;
}

export const Label = (props: ILabelProps): React.JSX.Element => {
  const {
    className,
    children,
  } = props;

  return (
    <div className={className}>
      {children}
    </div>
  );
};
