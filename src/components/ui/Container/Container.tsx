import type { ReactNode } from "react";
import type { Container } from "react-dom/client";

type ContainerProps = {
  children: ReactNode;
  className?: string;
}

export function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-site px-5 md:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  )
}