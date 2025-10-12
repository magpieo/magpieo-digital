import React, { ReactNode } from "react";

interface WidthWrapperProps {
  children: ReactNode;
}

const WidthWrapper: React.FC<WidthWrapperProps> = ({ children }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default WidthWrapper;
