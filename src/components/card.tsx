import type { ReactNode } from "react";

export const Card = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-slate-900 w-full max-h-screen sm:max-w-md mx-auto sm:rounded-xl sm:border border-slate-800 shadow-lg flex flex-col ${className}`}
  >
    {children}
  </div>
);

export const CardHeader = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={`p-6 border-b border-slate-800 flex-shrink-0 flex flex-col gap-8 ${className}`}
  >
    {children}
  </div>
);

export const CardContent = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`p-6 flex-1 overflow-y-auto ${className}`}>{children}</div>
);

export const CardFooter = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={`p-6 border-t border-slate-800 flex items-center justify-between flex-shrink-0 ${className}`}
  >
    {children}
  </div>
);
