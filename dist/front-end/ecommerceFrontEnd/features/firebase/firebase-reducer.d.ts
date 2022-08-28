import { SerializedError } from "@reduxjs/toolkit";
export interface AuthState {
    displayName?: string | null;
    email?: string | null;
    authenticated?: boolean;
    error?: SerializedError;
}
export declare const singWithPopup: any;
export declare const Logout: any;
export declare const signUp: any;
export declare const authSliceFirebase: any;
