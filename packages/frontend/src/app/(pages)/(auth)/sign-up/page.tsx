import AuthContainer from "@/components/auth/AuthContainer";
import AuthFooterLink from "@/components/auth/AuthFooterLink";
import AuthSignUpForm from "@/components/auth/AuthSignUpForm";
import React from "react";

const SignUp = () => {
  return (
    <AuthContainer
      cardTitle="회원가입"
      cardDescription="회원가입하세요"
      className="w-[25rem] relative"
    >
      <AuthSignUpForm />
      <AuthFooterLink
        descriptionText="이미 회원이신가요?"
        href="/sign-in"
        styleClass="absolute right-0 bottom-0 translate-y-full"
      >
        로그인
      </AuthFooterLink>
    </AuthContainer>
  );
};

export default SignUp;
