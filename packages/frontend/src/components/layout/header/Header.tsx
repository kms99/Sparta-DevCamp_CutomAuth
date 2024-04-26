import React from "react";
import HeaderButtonWrapper from "./HeaderButtonWrapper";
import { Button } from "@/components/ui/button";
import HeaderItem from "./HeaderItem";

const Header = () => {
  //TODO: 로그인 세션에 따른 버튼 조건부 처리
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-5 py-2">
      <h1 className="text-xl font-bold" about="title">
        IN&UP
      </h1>
      <HeaderButtonWrapper>
        <HeaderItem href="/sign-in">로그인</HeaderItem>
        <HeaderItem href="/sign-up">회원가입</HeaderItem>
        <Button variant="outline">로그아웃</Button>
      </HeaderButtonWrapper>
    </header>
  );
};

export default Header;
