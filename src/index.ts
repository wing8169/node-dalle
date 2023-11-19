import { Router } from "express";
import indexPage from "./components/index.ts";

export const router = Router().get("/", indexPage);
