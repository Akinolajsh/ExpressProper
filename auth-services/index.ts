import express, { Application, Request, Response } from "express";
import cors from "cors";
import {iUser} from "./utils/interface"


const port: number = 1111;
const app: Application = express();



let data: iUser[] = [];

app.use(cors());
app.use(express.json());
app.get("/", (req: Request, res: Response): Response => {
  try {
    return res.status(200).json({
      message: "You just hit the auth services endpoint!",
    });
  } catch (error) {
    return res.status(404).json({
      message: "Not found",
      data: error,
    });
  }
});
app.post("/api/register", );
app.get("/api/user", );
app.get("/api/user/:id/user",);

app.post("/api/use/login", );

const server = app.listen(port, () => {
  console.log("");
  console.log("server listening on port", port);
});

process.on("uncaughtException", (err: any) => {
  console.log("server is shutting down because of uncaught exception");
  console.log("uncaught exception", err);
  process.exit(1);
});
process.on("unhandledRejection", (reason: any) => {
  console.log("server is shutting down because of unhandled rejection");
  console.log("uncaught exception", reason);

  server.close(() => {
    process.exit(1);
  });
});
