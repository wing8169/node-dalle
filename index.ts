import { once } from "events";
import express from "express";
import markoMiddleware from "@marko/express";
import compressionMiddleware from "compression";
import { generateImage } from "./src/index.ts";

const devEnv = "development";
const { NODE_ENV = devEnv, PORT = 3000 } = process.env;
console.time("Start");

const app = express()
  .use(compressionMiddleware()) // Enable gzip compression for all HTTP responses.
  // @ts-ignore
  .use(markoMiddleware());

app.post("/images", generateImage);

if (NODE_ENV === devEnv) {
  const { createServer } = await import("vite");
  const devServer = await createServer({
    appType: "custom",
    server: { middlewareMode: true },
  });
  app.use(devServer.middlewares);
  app.use(async (req, res, next) => {
    try {
      const { router } = await devServer.ssrLoadModule("./src/index.ts");
      router(req, res, handleNext);
    } catch (err) {
      handleNext(err);
    }

    function handleNext(err: any) {
      if (err) devServer.ssrFixStacktrace(err);
      next(err);
    }
  });
} else {
  app
    .use("/assets", express.static("dist/assets")) // Serve assets generated from vite.
    // @ts-ignore
    .use((await import("./dist/index.js")).router);
}

await once(app.listen(PORT), "listening");

console.timeEnd("Start");
console.log(`Env: ${NODE_ENV}`);
console.log(`Address: http://localhost:${PORT}`);
