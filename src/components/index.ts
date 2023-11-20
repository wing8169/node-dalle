import { Request, Response } from "express";
import template from "./index.marko";

// sample interface
// export interface Input {
//   src: string;
// }

export default (req: Request, res: Response) => {
  res.marko(template as any, {});
};
