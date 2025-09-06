import { PrismaClient } from '../generated/prisma/index.js'
import jwt from "jsonwebtoken";


const prisma = new PrismaClient()
export default async function checkToken(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) {
      res.json({ error: { message: "No token" } });
    }
    const decoded = jwt.decode(token)
    const exist = await prisma.users.findFirst({where: {id: decoded.id}})
    if (!exist) {
        return res.json({ error: { message: "User not authorized" } });
    }
    const result = jwt.verify(token, process.env.JWT_SECRET);
    console.log(result);
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      res.json({error: { message: "Token expired" }});
    } else if (err.name === "JsonWebTokenError") {
      res.json({error: { message: "Invalid token" }});
    } else {
      res.json({error: { message: "Auth error" }});
    }
  }
}
