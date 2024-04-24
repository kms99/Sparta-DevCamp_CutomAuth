"use client";

import React from "react";
import AuthForm from "./AuthForm";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/lib/validation";
import { useForm } from "react-hook-form";
import AuthFormInput from "./authFormItem/AuthFormInput";
import AuthFormSelect from "./authFormItem/AuthFormSelect";
import { SelectItem } from "../ui/select";
import { UseFormReturn } from "react-hook-form";

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
      <AuthFormInput
        control={form.control}
        name="nickname"
        type="text"
        placeholder="홍길동"
      />
      <AuthFormInput
        control={form.control}
        name="email"
        type="email"
        placeholder="user@example.com"
      />
      <AuthFormInput
        control={form.control}
        name="phone"
        type="text"
        placeholder="01000000000"
      />

      <AuthFormSelect control={form.control} name="role">
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </AuthFormSelect>

      <AuthFormInput control={form.control} name="password" type="text" />
      <AuthFormInput control={form.control} name="check_password" type="text" />
    </AuthForm>
  );
};

export default AuthSignUpForm;
