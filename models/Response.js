class Response {
    constructor(code, payload, message){
        this.code = code;
        this.payload = payload;
        this.message = message;
    }
}

module.exports = Response;