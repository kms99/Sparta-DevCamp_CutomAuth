"use client";

import React from "react";
import AuthForm from "./AuthForm";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/lib/validation";
import { useForm } from "react-hook-form";
import AuthFormInput from "./authFormItem/AuthFormInput";
import AuthFormSelect from "./authFormItem/AuthFormSelect";
import { UseFormReturn } from "react-hook-form";
import {
  SIGN_UP_FIRST_STEP_ITEMS,
  SIGN_UP_SECOND_STEP_ITEMS,
} from "@/constants/auth";
import { FormItem } from "@/types/auth.type";

const AuthSignUpForm = () => {
  const form: UseFormReturn<z.infer<typeof formSchema>> = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: "",
      email: "",
      phone: "",
      role: "",
      password: "",
      check_password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <AuthForm<z.infer<typeof formSchema>> form={form} submitHandler={onSubmit}>
      {SIGN_UP_FIRST_STEP_ITEMS.map((item) => {
        if (item.itemType === FormItem.INPUT) {
          return (
            <AuthFormInput<z.infer<typeof formSchema>>
              title={item.title}
              key={item.name}
              control={form.control}
              name={item.name}
              type={item.type!}
              placeholder={item.placeholder}
            />
          );
        }
        if (item.itemType === FormItem.SELECT) {
          return (
            <AuthFormSelect<z.infer<typeof formSchema>>
              title={item.title}
              key={item.name}
              control={form.control}
              name={item.name}
              selectItems={item.selectItems!}
              placeholder={item.placeholder!}
            />
          );
        }
      })}

      {SIGN_UP_SECOND_STEP_ITEMS.map((item) => {
        if (item.itemType === FormItem.INPUT) {
          return (
            <AuthFormInput<z.infer<typeof formSchema>>
              title={item.title}
              key={item.name}
              control={form.control}
              name={item.name}
              type={item.type!}
              placeholder={item.placeholder}
            />
          );
        }
      })}
    </AuthForm>
  );
};

export default AuthSignUpForm;
