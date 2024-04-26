import Header from "@/components/layout/header/Header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen">
      <Header />
      {children}
    </div>
  );
};

export default layout;
