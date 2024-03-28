const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const port = 5555;
const jsonParser = bodyParser.json();
const jwtSecretKey = "nIXCgYDqT8GXcrXTjiTWJWWCoeRRCmCBtZ-X1OH3";

const users = [];

app.use(jsonParser);

app.post("/users/sign-up", (req, res) => {
  const { email, password } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, 12);
  const user = { email, encryptedPassword };

  // 회원가입
  users.push(user);

  // 토큰 발행
  const accessToken = jwt.sign({ email }, jwtSecretKey, { expiresIn: "5m" });
  res.json({ accessToken });
});

app.post("/users/log-in", (req, res) => {
  console.log(users);
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);

  if (!user) {
    res.send("해당 이메일로 가입한 회원이 없습니다.");
    return;
  }

  if (!bcrypt.compareSync(password, user.encryptedPassword)) {
    res.send("비밀번호가 일치하지 않습니다.");
    return;
  }

  // 토큰 발행
  const accessToken = jwt.sign({ email }, jwtSecretKey, { expiresIn: "5m" });
  res.json({ accessToken });
});

app.get("/my-profile", (req, res) => {
  const accessToken = req.headers.authorization.split("Bearer ")[1];

  try {
    const { email } = jwt.verify(accessToken, jwtSecretKey);
    const user = users.find((user) => user.email === email);

    res.json(user);
  } catch (e) {
    res.send("accessToken을 잘못 가져오셨어요");
  }
});

app.listen(port, () => {
  console.log(`서버가 ${port} 포트에서 듣고 있습니다...`);
});
