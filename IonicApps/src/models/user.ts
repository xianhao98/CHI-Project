import { DateTime } from "ionic-angular";

export interface User {
    // Account details
    username: string,
    email: string,
    password: string,
    userType: number,

    // Profile
    firstName: string,
    lastName: string,
    gender: string,
    dob: string,
    userImg: string,

    // Contact
    contactNo: number,
    address: string,
}