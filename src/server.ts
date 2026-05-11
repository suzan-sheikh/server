import { createServer, IncomingMessage, Server } from "http";

const server: Server = createServer((req: IncomingMessage, res) => {
  //   console.log(req.url);
  //   console.log(req.method);

  const url = req.url;
  const method = req.method;
  if (url === "/" && method === "GET") {
    // console.log("This is Root rout");
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "this is root route" }));
  } else if (url?.startsWith("/product")) {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "This is product rout" }));
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "route not found" }));
  }
});

server.listen(5000, () => {
  console.log("server is running on the port 5000");
});
