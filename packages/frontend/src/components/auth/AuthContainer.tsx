import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { PropsWithChildren } from "react";

interface Props {
  cardTitle: string;
  className?: string;
  cardDescription?: string;
}

const AuthContainer = ({
  children,
  cardTitle,
  className,
  cardDescription,
}: PropsWithChildren<Props>) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
        {!!cardDescription && (
          <CardDescription>{cardDescription}</CardDescription>
        )}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default AuthContainer;
