import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { ComponentProps, PropsWithChildren } from "react";

interface Props extends ComponentProps<typeof Link> {
  variant?: ComponentProps<typeof Button>["variant"];
}

const HeaderItem = ({
  children,
  variant = "default",
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <li>
      <Link {...props}>
        <Button variant={variant}>{children}</Button>
      </Link>
    </li>
  );
};

export default HeaderItem;
