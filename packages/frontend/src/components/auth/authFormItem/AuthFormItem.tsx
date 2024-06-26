import React, { PropsWithChildren } from "react";
import { FormControl, FormItem, FormLabel, FormMessage } from "../../ui/form";

interface Props {
  title: string;
}
const AuthFormItem = ({ children, title }: PropsWithChildren<Props>) => {
  return (
    <FormItem className="px-2">
      <FormLabel>{title}</FormLabel>
      <FormControl>{children}</FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default AuthFormItem;
