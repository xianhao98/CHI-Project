export interface User {
    // Account details
    email: string;
    password: string;
    username: string;
    userType: number;

    // Profile
    firstName: string;
    lastName: string;
    gender: string;
    dob: string;

    // Contact
    contactNo: string;
    address: string;
}