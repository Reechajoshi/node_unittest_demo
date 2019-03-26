const bodyParser = require("body-parser");
class middlewares {
    constructor(app) {
        this.app = app;
    }

    init() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

module.exports = (app) => new middlewares(app);