import AuthContainer from "@/components/auth/AuthContainer";
import AuthFooterLink from "@/components/auth/AuthFooterLink";
import React from "react";

const SignUp = () => {
  return (
    <div>
      <h1>회원가입</h1>
      <AuthContainer
        cardTitle="회원가입"
        cardDescription="회원가입하세요"
        className="w-[25rem] relative"
      >
        <h2>회원가입 카드입니다.</h2>
        <AuthFooterLink
          descriptionText="이미 회원이신가요?"
          href="/auth/sign-in"
          styleClass="absolute right-0 bottom-0 translate-y-full"
        >
          로그인
        </AuthFooterLink>
      </AuthContainer>
    </div>
  );
};

export default SignUp;
