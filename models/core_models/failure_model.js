class Failure {
    constructor(errormessage) {
        this.message = errormessage;
    }

    getMessage() {
        return this.message;
    }

}


module.exports=Failure;