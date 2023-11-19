# Introduction

Simple image generation tool with NodeJS + TypeScript + HTMX + Marko + OPENAPI

# How to run

1. If you encounter any issues missing packages, try install via `npm install -g <package-name>` as there are some global dependencies to compile the webpack.

# References

1. Install NodeJS + Express + TypeScript

https://blog.logrocket.com/how-to-set-up-node-typescript-express/

2. Install Marko

https://markojs.com/docs/express/

3. Install Marko VSCode Syntax Highlighting

Search: "Marko VSCode" in VSCode marketplace

4. Install TailwindCSS

https://daily.dev/blog/how-to-use-tailwindcss-with-node-js-express-and-pug

5. Important VSCode User Settings (JSON)

```
"[marko]": {
"editor.defaultFormatter": "marko-js.marko-vscode"
},
"tailwindCSS.includeLanguages": {
"marko": "html"
},
```

6. Copy files when compiling typescript into javacsript

https://vccolombo.github.io/blog/tsc-how-to-copy-non-typescript-files-when-building/

7. Webpack

https://its-amit.medium.com/how-to-make-build-for-express-js-node-js-using-webpack-and-deployment-on-docker-9cd219ba24a2

8. Webpack TypeScript

https://webpack.js.org/guides/typescript/
