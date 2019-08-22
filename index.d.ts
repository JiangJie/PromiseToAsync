declare function PromiseToAsync<TRes>(promise: Promise<TRes>): Promise<[Error | null, TRes]>;
declare function PromiseToAsync<T1, T2, T3, T4, T5, T6, TRes>(fn: (arg1?: T1, arg2?: T2, arg3?: T3, arg4?: T4, arg5?: T5, arg6?: T6) => Promise<TRes>): (arg1: T1, arg2?: T2, arg3?: T3, arg4?: T4, arg5?: T5, arg6?: T6) => Promise<[Error | null, TRes]>;

declare namespace PromiseToAsync {
    export function injectAsyncMethod(methodName: string): void;
}

export = PromiseToAsync;