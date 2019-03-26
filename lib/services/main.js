class mainService {
    async getHomePage(req) {
        return new Promise((resolve, reject) => {
            resolve({error: false, data: "ok"});
        })
    }

    async postValue(req) {
        return new Promise((resolve, reject) => {
            resolve({error: false, data: req.body});
        })
    }
}

module.exports = new mainService();