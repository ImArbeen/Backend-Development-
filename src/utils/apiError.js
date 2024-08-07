class apiError extends error{
    constructor(
        statusCode,
        message = "something went wrong",
        errors = []
        
    ){
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.errors  = errors
        this.success = false;
    }

}

export {apiError}