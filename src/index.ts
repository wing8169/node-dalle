// env name: OPENAPI_SECRET

import { Router, Request, Response } from "express";
import indexPage from "./components/index.ts";
import template from "./components/img-content/index.marko";
import "dotenv/config";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAPI_SECRET, // defaults to process.env["OPENAI_API_KEY"]
});

export const generateImage = async (req: Request, res: Response) => {
  const prompt = req.body.prompt ?? "";
  let imageUrl = "";
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt,
      n: 1,
      size: "1024x1024",
    });
    imageUrl = response.data[0].url ?? "";
  } catch (err: any) {
    console.log(err);
    res.send({ error: err.toString() });
  }
  res.marko(template as any, {
    src:
      imageUrl ??
      "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww",
  });
};

export const router = Router()
  .get("/", indexPage)
  .post("/images", generateImage);
