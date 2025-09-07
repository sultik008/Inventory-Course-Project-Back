import express from "express";
import cors from "cors";
import router from "./routes/route.js";
import passport from "passport";
import GitHubStrategy from "passport-github2";
import { PrismaClient } from "./generated/prisma/index.js";
import dotenv from "dotenv";
import { generateToken } from "./controllers/controller.js";

const urlglobal = "https://inventory-course-project-back-production.up.railway.app/api"
const urllocal = "http://localhost:5000/api"

dotenv.config();
const prisma = new PrismaClient(),
  GITHUB_CLIENT_ID = "Ov23liOSdnMtiVKXGyAA",
  GITHUB_CLIENT_SECRET = "d8515eca6ed77d14b258ff15777b5012441e6c8c";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL:
        `${urlglobal}/auth/github/callback`,
      scope: ["user:email"],
    },

    async function (accessToken, refreshToken, profile, done) {
      try {
        const res = await fetch("https://api.github.com/user/emails", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "User-Agent": "Inventory",
          },
        });
        const emails = await res.json();
        const email = emails[0].email;
        let exist = await prisma.users.findFirst({ where: { email: email } });
        let user
        if (!exist) {
          user = await prisma.users.create({
            data: {
              email: email,
              name: profile.displayName,
              picture: profile.photos[0].value,
              isadmin: false,
            },
          });
          
          user.token = generateToken()
          console.log(user)
          return done(null, user,);
        }
        exist.token = generateToken()
        console.log(exist)
        return done(null, exist);
      } catch (error) {
        return done(error);
      }
    }
  )
);

app.listen(5000, () => console.log("Express connected"));
