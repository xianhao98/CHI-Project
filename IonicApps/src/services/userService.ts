import { Injectable } from '@angular/core';
import { DateTime } from 'ionic-angular';
import { User } from '../models/user';

@Injectable()
export class userService {

    user = {} as User;

    // Account
    username: string;
    email: string;
    password: string;
    userType: number;

    // Profile
    firstName: string;
    lastName: string;
    gender: string;
    dob: string;
    userImg: string;

    // Contact
    contactNo: number;
    address: string;

    constructor() {
        // Account
        this.username = this.user.username;
        this.email = this.user.email;
        this.password = this.user.password;
        this.userType = this.user.userType;

        // Profile
        this.firstName = this.user.firstName;
        this.lastName = this.user.lastName;
        this.gender = this.user.gender;
        this.dob = this.user.dob;
        this.userImg = this.user.userImg;

        // Contact
        this.contactNo = this.user.contactNo;
        this.address = this.user.address;
    }

}