import React, { PropsWithChildren } from "react";
import { Form } from "../ui/form";
import { UseFormReturn, FieldValues } from "react-hook-form";

interface Props<T extends FieldValues> {
  form: UseFormReturn<T>;
  submitHandler: (values: T) => void;
  keyDownHandler?: (e: React.KeyboardEvent<HTMLFormElement>) => void;
}

const AuthForm = <T extends Record<string, any>>({
  children,
  form,
  submitHandler,
  keyDownHandler,
}: PropsWithChildren<Props<T>>) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        onKeyDown={keyDownHandler}
      >
        {children}
      </form>
    </Form>
  );
};

export default AuthForm;
