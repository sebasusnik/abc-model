import type { ReactNode } from "react";

export const Label = ({
  children,
  htmlFor,
  ...props
}: {
  children: ReactNode;
  htmlFor: string;
}) => (
  <label
    htmlFor={htmlFor}
    className="text-sm font-medium text-slate-300 mb-2 block"
    {...props}
  >
    {children}
  </label>
);
