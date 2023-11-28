import express from "express";

//hooks
import cors from "cors";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
import "express-async-errors";

//db
import { connectDB } from "./libs/db/database.ts";

//router
import main from "./v1/routes/main_router.ts";

const app = express();

connectDB();

app.listen(8080, "0.0.0.0");
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

app.use(fileUpload());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/v1/main", main);

app.use((req, res) => {
  res.status(404).send("404 : 터미널을 통해 확인하세요");
});

app.use((error: unknown, res: any) => {
  console.error(error);
  res.sendStatus(500);
});
