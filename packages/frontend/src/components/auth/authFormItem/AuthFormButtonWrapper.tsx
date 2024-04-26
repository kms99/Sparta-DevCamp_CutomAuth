import React, { PropsWithChildren } from "react";

const AuthFormButtonWrapper = ({ children }: PropsWithChildren) => {
  return <div className="flex gap-2 mt-5 px-2">{children}</div>;
};

export default AuthFormButtonWrapper;
