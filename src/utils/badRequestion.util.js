import CustomError from "../../../Error Handling in Express/src/utils/customError.js";

export class BadRequestError extends CustomError{
    constructor(message){
        super(message, 400)
    }
}