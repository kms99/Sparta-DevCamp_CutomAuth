import Link from "next/link";
import React, { ComponentProps, PropsWithChildren } from "react";

interface Props extends ComponentProps<typeof Link> {
  descriptionText: string;
  styleClass?: string;
}

const AuthFooterLink = ({
  children,
  descriptionText,
  styleClass,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <div className={`flex gap-4 text-base pt-2 ${styleClass}`}>
      <span>{descriptionText}</span>
      <Link {...props} className="font-bold">
        {children}
      </Link>
    </div>
  );
};

export default AuthFooterLink;
