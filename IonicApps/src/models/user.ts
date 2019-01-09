import { DateTime } from "ionic-angular";

export interface User {
    username: string,
    email: string,
    password: string,
    userType: number,

    firstName: string,
    lastName: string,
    gender: string,
    dob: string,
    userImg: string,

    contactNo: number,
    address: string,
}