import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="hidden lg:block h-9 px-6 bg-white font-black text-base text-blue-600 text-white rounded-md"
      {...props}
    >
      {children}
    </button>
  );
}
