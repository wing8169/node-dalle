import { Router, Request, Response } from "express";
import indexPage from "./components/index.ts";
import OpenAI from "openai";
import "dotenv/config";
import template from "./components/img-content/index.marko";

const openai = new OpenAI({
  apiKey: process.env.OPENAPI_SECRET,
});

export const generateImage = async (req: Request, res: Response) => {
  console.log(req.body);
  let imageUrl: string | undefined = undefined;
  // generate image
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: req.body.prompt ?? "beautiful white girl",
      n: 1,
      size: "1024x1024",
    });
    imageUrl = response.data[0].url ?? "";
  } catch (err: any) {
    res.send({ err: err.toString() });
  }
  console.log("generated", imageUrl);
  // const imageUrl = undefined;
  res.marko(template as any, {
    src:
      imageUrl ??
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT54sU7bc_QAOL63miw2XRTVXAjsdK8vA9W08LAMog&s",
  });
};

export const router = Router()
  .get("/", indexPage)
  .post("/images", generateImage);
