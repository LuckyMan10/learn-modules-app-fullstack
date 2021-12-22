import { moduleI } from "./module.interface";

export interface accountInfoI {
    regData: string;
    successfulTests: number;
    failedTests: number;
    email: string;
    username: string;
    userId: string;
}

export interface accountInfoDBI {
    regData: string;
    successfulTests: number;
    failedTests: number;
    email: string;
    username: string;
    userId: string;
    _id: string;
    __v?: number;
}

export interface modulesDBI {
    userId: string;
    modules: moduleI[];
    _id: string;
    __v?: number;
}