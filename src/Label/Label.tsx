import * as React from "react";

export interface ILabelProps {
  className?: string;
  children: any;
}

export const Label = (props: ILabelProps): JSX.Element => {
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
