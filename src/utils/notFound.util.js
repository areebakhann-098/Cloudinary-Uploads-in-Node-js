import CustomError from "../../../Error Handling in Express/src/utils/customError.js";

export class NotFoundError extends CustomError{
    constructor(message){
super(message, 404)
    }
}