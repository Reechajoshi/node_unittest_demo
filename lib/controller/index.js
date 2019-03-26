const mainService = require("./../services/main");

class controller {
    async getHomePage(req, res) {
        const homePageRes = await mainService.getHomePage(req);
        res.send(homePageRes.error ? "internal_server_error": homePageRes.data);
    }

    async postValue(req, res) {
        const postValueRes = await mainService.postValue(req);
        res.send(postValueRes.error ? "internal_server_error": postValueRes.data);
    }
}

module.exports = new controller();