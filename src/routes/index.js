import express from "express";
import register from "./registerRoutes.js";
import login from "./loginRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("backend works"));

    app.use(express.json(), register, login);
};

export default routes;