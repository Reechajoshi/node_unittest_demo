const express = require("express");
const app = express();
const middleware = require("./lib/middleware")(app);

const routes = require("./lib/routes")(app);
middleware.init();

app.listen(3002, ()=> {
    console.log("application started at 3002");
    routes.init(app);
});