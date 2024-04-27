"use client";

import React from "react";
import AuthForm from "./AuthForm";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInFormSchema } from "@/lib/validation";
import { useForm } from "react-hook-form";
import AuthFormInput from "./authFormItem/AuthFormInput";
import { UseFormReturn } from "react-hook-form";
import { SIGN_IN_ITEMS } from "@/constants/auth";
import AuthFormButtonWrapper from "./authFormItem/AuthFormButtonWrapper";
import { Button } from "../ui/button";
import axios from "axios";

const AuthSignInForm = () => {
  const form: UseFormReturn<z.infer<typeof signInFormSchema>> = useForm<
    z.infer<typeof signInFormSchema>
  >({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signInFormSchema>) => {
    // 비밀번호 보안을 위한 post 조치
    const response = await axios.post(process.env.NEXT_PUBLIC_SIGN_IN!, {
      email: values.email,
      password: values.password,
    });

    console.log(response);
  };

  return (
    <AuthForm<z.infer<typeof signInFormSchema>>
      form={form}
      submitHandler={onSubmit}
    >
      <div className="relative space-y-3 overflow-x-hidden">
        {SIGN_IN_ITEMS.map((item) => {
          {
            return (
              <AuthFormInput<z.infer<typeof signInFormSchema>>
                title={item.title}
                key={item.name}
                control={form.control}
                name={item.name}
                type={item.type!}
              />
            );
          }
        })}
      </div>
      <AuthFormButtonWrapper>
        <Button type="submit" className="w-full">
          로그인
        </Button>
      </AuthFormButtonWrapper>
    </AuthForm>
  );
};

export default AuthSignInForm;
