import React from "react";
type MessageBoxProps = {
  children?: React.ReactNode;
};
export default function MessageBox({ children }: MessageBoxProps) {
  return <div>{children}</div>;
}
