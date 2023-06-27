import express, { Response } from "express";
import path from "path";
import morgan from "morgan"
import dialogRouter from "./router/gpt"
import dotenv from "dotenv"
dotenv.config()

// Create Express server
const app = express();


// Express configuration
app.set("port", process.env.PORT ?? 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"))

app.use(express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 }));

app.get("/api/v1", (_,res:Response):Response =>{
    return res.status(200).send(process.env.OPENAI_API_KEY)
})

app.use("/api/v1/dialog",dialogRouter)

export default app;
