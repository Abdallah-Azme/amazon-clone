import { cn } from "@/lib/utils";
import React from "react";

type ContainerProps = {
  children?: React.ReactElement;
  className?: string;
};
export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto container max-w-7xl ", className)}>
      {children}
    </div>
  );
}
