import express from "express";
import cookieParser from "cookie-parser";

import passport from "./sec";
import userRouter from "./repositories/user";

// 1 expressの設定
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 2 passportを初期化
app.use(passport.initialize());
// 3 routerを追加
app.use("/user", passport.authenticate("jwt", { session: false }), userRouter);

app.listen(3000, () => {
  console.log("listen to " + 3000);
});

//jwtメモ　https://zenn.dev/msksgm/articles/20211113-typescript-jwt-passport-server