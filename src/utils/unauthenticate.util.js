import CustomError from "../../../Error Handling in Express/src/utils/customError.js";

export class UnauthenticateError extends CustomError{
    constructor(message){
        super(message, 401)
    }
}