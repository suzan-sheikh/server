import { createServer, Server } from "http";
import type { Req, Res } from "./type";
import { sendResponse } from "./utils";

const server: Server = createServer((req: Req, res: Res) => {
  const url = req.url ?? "/";

  if (url === "/") {
    sendResponse(res, {message: "this is root route"}, 200)
    return
  }
  sendResponse(res, {message: "Not Found"}, 404)
});

const port = 5000;

server.listen(port, () => {
  console.log(`server is running is port ${port}`);
});
