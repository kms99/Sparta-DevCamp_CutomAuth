import React, { PropsWithChildren } from "react";

const AuthWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen flex justify-center items-center">{children}</div>
  );
};

export default AuthWrapper;
