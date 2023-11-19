import { Router, Request, Response } from "express";
import indexPage from "./components/index.ts";
import OpenAI from "openai";
import "dotenv/config";
import renderImageContent from "./components/img-content/index.ts";

const openai = new OpenAI({
  apiKey: process.env.OPENAPI_SECRET,
});

export const router = Router().get("/", indexPage);
export const generateImage = async (req: Request, res: Response) => {
  // generate image
  // @ts-ignore
  const response = await openai.createImage({
    model: "dall-e-3",
    prompt: "a white siamese cat",
    n: 1,
    size: "1024x1024",
  });
  const imageUrl: string = response.data.data[0].url;
  console.log("generated", imageUrl);
  renderImageContent(req, res, imageUrl);
  // res.marko(template as any, {
  //   src: imageUrl,
  // });
};
