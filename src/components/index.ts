import { Request, Response } from "express";
import template from "./index.marko";

export default (req: Request, res: Response) => {
  res.marko(template as any, {});
};
