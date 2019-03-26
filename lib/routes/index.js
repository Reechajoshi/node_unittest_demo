const controller = require("./../controller");
class routes {
    constructor(app) {
        this.app = app;
    }

    init() {
        this.app.get("/", controller.getHomePage);
        this.app.post("/value", controller.postValue);
    }
}

module.exports = app => new routes(app);