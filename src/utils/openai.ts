import { Configuration, OpenAIApi } from "openai";

export const openaiInit = (): OpenAIApi => {
  let configuration = new Configuration({
    organization: process.env.OPENAI_ID_ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY,
  });
  let openai = new OpenAIApi(configuration);
  return openai;
};
