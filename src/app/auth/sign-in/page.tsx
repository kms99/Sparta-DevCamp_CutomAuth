import AuthContainer from "@/components/auth/AuthContainer";
import AuthFooterLink from "@/components/auth/AuthFooterLink";
import AuthWrapper from "@/components/auth/AuthWrapper";
import React from "react";

const SignIn = () => {
  return (
    <AuthWrapper>
      <AuthContainer
        cardTitle="로그인"
        cardDescription="로그인하세요"
        className="w-[25rem] relative"
      >
        <AuthFooterLink
          descriptionText="아직 회원이 아니신가요?"
          href="/auth/sign-up"
          styleClass="absolute right-0 bottom-0 translate-y-full"
        >
          회원가입
        </AuthFooterLink>
      </AuthContainer>
    </AuthWrapper>
  );
};

export default SignIn;
