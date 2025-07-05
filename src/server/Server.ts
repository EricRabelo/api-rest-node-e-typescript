import express from "express";

const server = express();

interface Teste {

}

server.get("/", (_, res) => {
    res.send("Hello, World!");
});

export { server };
