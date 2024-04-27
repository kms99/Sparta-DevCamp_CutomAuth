const express = require("express");
const mysql = require("mysql2");
const path = require("path");
const serveStatic = require("serve-static");
const dbconfig = require("./config/dbconfig.json");
const cors = require("cors");

const now = new Date();

// 데이터베이스 연결 구성
const pool = mysql.createPool({
  connectionLimit: 10, // 연결 풀에서 동시에 유지할 수 있는 최대 연결 수
  host: dbconfig.DATABASE_HOST,
  user: dbconfig.DATABASE_USER,
  password: dbconfig.DATABASE_PASSWORD,
  database: dbconfig.DATABASE_NAME,
});

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("public", serveStatic(path.join(__dirname, "public")));

/**
 * 회원가입
 */
app.post("/process/user/sign-up", (req, res) => {
  console.log("/process/user/sign-up 호출됨");

  const { nickname, email, role, phone, password } = req.body;

  pool.getConnection((err, conn) => {
    if (err) {
      if (conn) {
        conn.release();
      }
      console.log(
        `${now.toUTCString()} / [서버 오류] DB와 연결할 수 없습니다.`
      );
      res
        .status(500)
        .json({ message: "서버 오류가 발생하였습니다. 관리자에 문의하세요" });
      return;
    }

    console.log("connect database");

    conn.query(
      "INSERT INTO users(nickname,email,role,phone,password) VALUES (?,?,?,?,SHA2(?,256));",
      [nickname, email, role, phone, password],
      (err, result) => {
        conn.release();

        if (err) {
          console.log(
            `${now.toUTCString()} / [DB 오류] DATABASE query가 잘못되었습니다.`
          );
          res
            .status(500)
            .json({ message: "DB 오류가 발생하였습니다. 관리자에 문의하세요" });
          return;
        }

        if (result) {
          console.log(
            `${now.toUTCString()} / [회원가입 성공] ${nickname}(${email})`
          );
          res.status(200).json({
            message: "회원가입 성공",
            user: { nickname, email, role, phone },
          });
          return;
        } else {
          console.log(
            `${now.toUTCString()} / [회원가입 실패] (input: ${email}) 이미 생성된 계정이 있습니다.`
          );
          res
            .status(404)
            .json({ message: "회원가입 실패, 이미 생성된 계정이 있습니다." });
          return;
        }
      }
    );
  });
});

/**
 * 로그인
 */
app.post("/process/user/sign-in", (req, res) => {
  const { email, password } = req.body;

  console.log("/process/user/sign-in 호출됨, 로그인 요청");

  pool.getConnection((err, conn) => {
    if (err) {
      if (conn) {
        conn.release();
      }
      console.log(
        `${now.toUTCString()} / [서버 오류] DB와 연결할 수 없습니다.`
      );
      res
        .status(500)
        .json({ message: "서버 오류가 발생하였습니다. 관리자에 문의하세요" });
      return;
    }

    console.log("connect database");

    conn.query(
      "SELECT * FROM users WHERE email=? AND password=SHA2(?,256);",
      [email, password],
      (err, rows) => {
        // connect 해제
        conn.release();
        if (err) {
          console.log(
            `${now.toUTCString()} / [DB 오류] DATABASE query가 잘못되었습니다.`
          );
          res
            .status(500)
            .json({ message: "DB 오류가 발생하였습니다. 관리자에 문의하세요" });
          return;
        }

        if (rows.length > 0) {
          console.log(
            `${now.toUTCString()} / [로그인 성공] ${rows[0].nickname}(${rows[0].email})`
          );
          res.status(200).json({ message: "로그인 성공", user: rows[0] });
          return;
        } else {
          console.log(
            `${now.toUTCString()} / [로그인 실패] (input: ${email}) 입력한 정보와 일치하는 정보가 없습니다.`
          );
          res
            .status(404)
            .json({ message: "로그인 실패, 일치하는 사용자가 없습니다." });
          return;
        }
      }
    );
  });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
