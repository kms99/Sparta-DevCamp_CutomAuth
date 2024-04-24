import React, { PropsWithChildren } from "react";
import { Form } from "../ui/form";
import { UseFormReturn, FieldValues } from "react-hook-form";

interface Props<T extends FieldValues> {
  form: UseFormReturn<T>;
  submitHandler: (values: T) => void;
}

const AuthForm = <T extends Record<string, any>>({
  children,
  form,
  submitHandler,
}: PropsWithChildren<Props<T>>) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)}>{children}</form>
    </Form>
  );
};

export default AuthForm;
