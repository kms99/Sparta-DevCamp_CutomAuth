import Link from "next/link";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen flex justify-center items-center relative">
      <Link href="/">
        <h2 className="absolute left-10 top-10 text-lg font-bold">홈으로</h2>
      </Link>
      {children}
    </div>
  );
};

export default layout;
