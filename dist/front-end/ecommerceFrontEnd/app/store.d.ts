import { TypedUseSelectorHook } from "react-redux";
export declare const store: any;
export declare type RootState = ReturnType<typeof store.getState>;
export declare type AppDispatch = typeof store.dispatch;
export declare const useSelector: TypedUseSelectorHook<RootState>;
