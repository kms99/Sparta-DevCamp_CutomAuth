import React, { PropsWithChildren } from "react";

const HeaderButtonWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <ul className="flex gap-2">{children}</ul>
    </div>
  );
};

export default HeaderButtonWrapper;
