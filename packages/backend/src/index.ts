const express = require("express");
const mysql = require("mysql2");
const path = require("path");
const serveStatic = require("serve-static");
const dbconfig = require("./config/dbconfig.json");
const cors = require("cors");

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

app.post("/process/user", (req, res) => {
  console.log("/process/user 호출됨");

  const { nickname, email, role, phone, password } = req.body;

  pool.getConnection((err, conn) => {
    if (err) {
      if (conn) {
        conn.release();
      }
      console.log("MySQL getConnection error: ", err);
      return;
    }

    console.log("connect database");

    const exec = conn.query(
      "INSERT INTO users(nickname,email,role,phone,password) VALUES (?,?,?,?,SHA2(?,256));",
      [nickname, email, role, phone, password],
      (err, result) => {
        conn.release();
        console.log("실행된 SQL: " + exec.sql);

        if (err) {
          console.log("SQL 실행 오류");
          console.dir(err);
        }
        if (result) {
          console.dir(result);
          console.log("SQL 실행 성공");

          res.writeHead("200", { "Content-Type": "text/html; charset=utf8" });
          res.write("<h2>사용자 추가 성공</h2>");
          res.send;
        } else {
          console.log("SQL 실행 실패");

          res.writeHead("200", { "Content-Type": "text/html; charset=utf8" });
          res.write("<h2>사용자 추가 실패</h2>");
          res.send;
        }
      }
    );
  });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
