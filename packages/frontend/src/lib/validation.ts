import { z } from "zod";

export const signUpFormSchema = z
  .object({
    nickname: z.string({ message: "이름은 2글자 이상이여야 합니다." }).min(2, {
      message: "이름은 두 글자 이상이여야 합니다.",
    }),
    email: z.string({ message: "올바른 이메일을 입력해주세요." }).email({
      message: "올바른 이메일을 입력해주세요.",
    }),
    phone: z
      .string({ message: "연락처는 11자리여야 합니다." })
      .length(11, {
        message: "연락처는 11자리여야 합니다.",
      })
      .regex(/^010\d{8}$/, {
        message: "010으로 시작하는 11자리 숫자를 입력해주세요.",
      }),
    role: z.string({ message: "역할을 선택해주세요." }).min(1, {
      message: "역할을 선택해주세요.",
    }),
    password: z
      .string({ message: "비밀번호는 최소 6자리 이상이어야 합니다." })
      .min(6, {
        message: "비밀번호는 최소 6자리 이상이어야 합니다.",
      })
      .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/, {
        message: "비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다.",
      }),
    check_password: z
      .string({ message: "비밀번호는 최소 6자리 이상이어야 합니다." })
      .min(6, {
        message: "비밀번호는 최소 6자리 이상이어야 합니다.",
      })
      .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/, {
        message: "비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다.",
      }),
  })
  .refine((data) => data.password === data.check_password, {
    message: "비밀번호가 다릅니다.",
    path: ["check_password"],
  });

export const signInFormSchema = z.object({
  email: z.string({ message: "올바른 이메일을 입력해주세요." }).email({
    message: "올바른 이메일을 입력해주세요.",
  }),
  password: z
    .string({ message: "비밀번호는 최소 6자리 이상이어야 합니다." })
    .min(6, {
      message: "비밀번호는 최소 6자리 이상이어야 합니다.",
    })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/, {
      message: "비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다.",
    }),
});
