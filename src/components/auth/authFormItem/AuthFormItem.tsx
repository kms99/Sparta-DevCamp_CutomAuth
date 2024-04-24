import React, { PropsWithChildren } from "react";
import { FormControl, FormItem, FormLabel, FormMessage } from "../../ui/form";

const AuthFormItem = ({ children }: PropsWithChildren) => {
  return (
    <FormItem>
      <FormLabel>Username</FormLabel>
      <FormControl>{children}</FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default AuthFormItem;
