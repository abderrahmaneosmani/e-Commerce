import { SerializedError } from "@reduxjs/toolkit";
export interface AuthState {
    displayName: string | null;
    email: string | null;
    authenticated: boolean;
    error: SerializedError | null;
    user: any;
}
export interface UserResponse {
    user: any;
    token: string;
}
export interface LoginRequest {
    username: string;
    password: string;
}
export declare const signIn: any;
export declare const logOut: any;
export declare const loginPopUp: any;
export declare const authSlice: any;
