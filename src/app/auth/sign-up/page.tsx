import AuthContainer from "@/components/auth/AuthContainer";
import AuthFooterLink from "@/components/auth/AuthFooterLink";
import AuthWrapper from "@/components/auth/AuthWrapper";
import React from "react";

const SignUp = () => {
  return (
    <AuthWrapper>
      <AuthContainer
        cardTitle="회원가입"
        cardDescription="회원가입하세요"
        className="w-[25rem] relative"
      >
        <AuthFooterLink
          descriptionText="이미 회원이신가요?"
          href="/auth/sign-in"
          styleClass="absolute right-0 bottom-0 translate-y-full"
        >
          로그인
        </AuthFooterLink>
      </AuthContainer>
    </AuthWrapper>
  );
};

export default SignUp;
