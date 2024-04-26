import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const UserProfileContainer = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>회원정보</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <h2>닉네임</h2>
          <span>홍길동</span>
        </div>
        <div>
          <h2>이메일</h2>
          <span>홍길동</span>
        </div>
        <div>
          <h2>전화번호</h2>
          <span>01000000000</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfileContainer;
