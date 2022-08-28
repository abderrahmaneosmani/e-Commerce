import { RootState } from "../../app/store";
import { AuthState } from "./auth-slice";
export declare const authSelector: (state: RootState) => AuthState;
export declare const displayNameSelector: ((state: {}) => string) & import("reselect").OutputSelectorFields<(args_0: AuthState) => string & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const emailSelector: ((state: {}) => string) & import("reselect").OutputSelectorFields<(args_0: AuthState) => string & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const isUserAuthenticatedSelector: ((state: {}) => boolean) & import("reselect").OutputSelectorFields<(args_0: AuthState) => boolean & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const errorSelector: ((state: {}) => any) & import("reselect").OutputSelectorFields<(args_0: AuthState) => any> & {
    clearCache: () => void;
};
