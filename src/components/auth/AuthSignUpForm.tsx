"use client";

import React, { useState } from "react";
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
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import AuthFormButtonWrapper from "./authFormItem/AuthFormButtonWrapper";
import { Button } from "../ui/button";

const AuthSignUpForm = () => {
  const [step, setStep] = useState<number>(0);

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

  const handleNextStep = (nextStep: number) => {
    if (!step) {
      form.trigger(["nickname", "email", "phone", "role"]);

      const phoneState = form.getFieldState("phone");
      const emailState = form.getFieldState("email");
      const usernameState = form.getFieldState("nickname");
      const roleState = form.getFieldState("role");

      if (!phoneState.isDirty || phoneState.invalid) return;
      if (!emailState.isDirty || emailState.invalid) return;
      if (!usernameState.isDirty || usernameState.invalid) return;
      if (!roleState.isDirty || roleState.invalid) return;
    }
    setStep(nextStep);
  };

  const handleKeyDownBubble = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter" && !step) {
      e.preventDefault();
      handleNextStep(1);
    }
  };

  return (
    <AuthForm<z.infer<typeof formSchema>>
      form={form}
      submitHandler={onSubmit}
      keyDownHandler={handleKeyDownBubble}
    >
      <div className="relative space-y-3 overflow-x-hidden">
        <motion.div
          className={cn("space-y-3")}
          animate={{ translateX: `${step * -100}%` }}
          transition={{ ease: "easeInOut" }}
        >
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
                  tabAble={!step}
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
                  tabAble={!step}
                />
              );
            }
          })}
        </motion.div>

        <motion.div
          className={cn("space-y-3 absolute top-0 left-0 right-0")}
          style={{ translateX: `${(1 - step) * 100}%` }}
          animate={{ translateX: `${(1 - step) * 100}%` }}
          transition={{ ease: "easeInOut" }}
        >
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
                  tabAble={!!step}
                />
              );
            }
          })}
        </motion.div>
      </div>
      <AuthFormButtonWrapper>
        {!step ? (
          <Button type="button" onClick={() => handleNextStep(1)}>
            다음으로
          </Button>
        ) : (
          <>
            <Button type="button" onClick={() => handleNextStep(0)}>
              이전으로
            </Button>
          </>
        )}
        <Button type="submit" className={step ? "block" : "hidden"}>
          제출
        </Button>
      </AuthFormButtonWrapper>
    </AuthForm>
  );
};

export default AuthSignUpForm;
