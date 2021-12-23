import { moduleI } from "./module.interface";


export type accountInfoDB = {
    regData: string;
    successfulTests: number;
    failedTests: number;
    email: string;
    username: string;
    userId: string;
    _id: string;
    __v?: number;
}

export type accountInfoI = Omit<accountInfoDB, "_id" | "__v">

export interface modulesDB {
    userId: string;
    modules: moduleI[];
    _id: string;
    __v?: number;
}