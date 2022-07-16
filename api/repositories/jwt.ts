import { NextFunction, Request, Response } from "express";
import jwt, { VerifyOptions } from "jsonwebtoken";

export default (req: Request, res: Response, next: NextFunction) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    if (token) {
        jwt.verify(token, "secretKey", (error: any, decoded: any) => {
            if (error) {
                res.status(403);
                return res.json({ success: false, message: "Authentication of token failed." });
            } else {
                console.log(decoded);
                next();
            }
        });
    } else {
        res.status(403);
        res.json({
            message: "Token nothing.",
            success: false,
        });
    }
};

//jwtないよ！ エラーがでるけど入れたはず…
