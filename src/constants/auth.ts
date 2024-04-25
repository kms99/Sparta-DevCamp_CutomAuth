import { signInFormSchema, signUpFormSchema } from "@/lib/validation";
import { FormItem, FormItemType, Role } from "@/types/auth.type";
import { z } from "zod";

export const SIGN_UP_FIRST_STEP_ITEMS: FormItemType<
  z.infer<typeof signUpFormSchema>
>[] = [
  {
    title: "닉네임",
    itemType: FormItem.INPUT,
    type: "text",
    name: "nickname",
    placeholder: "홍길동",
  },
  {
    title: "이메일",
    itemType: FormItem.INPUT,
    type: "email",
    name: "email",
    placeholder: "user@example.com",
  },
  {
    title: "연락처",
    itemType: FormItem.INPUT,
    type: "text",
    name: "phone",
    placeholder: "01000000000",
  },
  {
    title: "역할",
    itemType: FormItem.SELECT,
    name: "role",
    selectItems: [Role.ADMIN, Role.GENERAL],
    placeholder: "역할",
  },
];

export const SIGN_UP_SECOND_STEP_ITEMS: FormItemType<
  z.infer<typeof signUpFormSchema>
>[] = [
  {
    title: "비밀번호",
    itemType: FormItem.INPUT,
    type: "password",
    name: "password",
  },
  {
    title: "비밀번호 확인",
    itemType: FormItem.INPUT,
    type: "password",
    name: "check_password",
  },
];

export const SIGN_IN_ITEMS: FormItemType<z.infer<typeof signInFormSchema>>[] = [
  {
    title: "아이디",
    itemType: FormItem.INPUT,
    type: "email",
    name: "email",
  },
  {
    title: "비밀번호",
    itemType: FormItem.INPUT,
    type: "password",
    name: "password",
  },
];
