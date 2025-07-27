import type { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const Textarea = ({
  className = "",
  rows = 6,
  ...props
}: TextareaProps) => (
  <textarea
    {...props}
    className={`w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 resize-none ${className}`}
    rows={rows}
  />
);
