import { makeAutoObservable } from "mobx";
import { ServerError } from "../models/serverError";

export default class CommonStore {
    error: ServerError | null;

    constructor() {
        makeAutoObservable(this);
    }

    setServerError(error: ServerError) {
        this.error = error;
    }
}