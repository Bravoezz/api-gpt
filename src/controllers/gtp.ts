import { Request, Response } from "express";
import { Configuration, OpenAIApi } from "openai";
import { openaiInit } from "../utils/openai";

interface RequestBody {
  prompt: string;
  message: string;
}

interface RequestExt extends Request {
  body: RequestBody;
}

export const getUseModel = async (req: Request, res: Response) => {
  try {
    const openai:OpenAIApi = openaiInit();
    const { data: engines } = await openai.listModels();
    const engine = engines.data.pop();
    res.status(200).json(engine);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const dialogGpt = async (req: RequestExt, res: Response) => {
    const model:string = "gpt-3.5-turbo-16k"
  try {
    const { body } = req;
    const openai:OpenAIApi = openaiInit();
    const {data} = await openai.createChatCompletion({
        model,
        messages:[{role:"user",content:"hola"}]
    })

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
