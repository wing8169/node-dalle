import { Request, Response } from "express";
import template from "./index.marko";

export default (req: Request, res: Response) => {
  res.marko(template as any, {
    src: "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg",
  });
};
