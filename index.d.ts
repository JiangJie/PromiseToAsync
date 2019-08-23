type NullableError<TError extends Error> = TError | null;

declare function PromiseToAsync<TError extends Error>(promise: Promise<void>): Promise<[NullableError<TError>]>;
declare function PromiseToAsync<TError extends Error, TResult>(promise: Promise<TResult>): Promise<[NullableError<TError>, TResult]>;

declare function PromiseToAsync<TError extends Error>(
    fn: () => Promise<void>
): () => Promise<[NullableError<TError>]>;
declare function PromiseToAsync<TError extends Error, TResult>(
    fn: () => Promise<TResult>
): () => Promise<[NullableError<TError>, TResult]>;

declare function PromiseToAsync<TError extends Error, T1>(
    fn: (arg1: T1) => Promise<void>
): (arg1: T1) => Promise<[NullableError<TError>]>;
declare function PromiseToAsync<TError extends Error, T1, TResult>(
    fn: (arg1: T1) => Promise<TResult>
): (arg1: T1) => Promise<[NullableError<TError>, TResult]>;

declare function PromiseToAsync<TError extends Error, T1, T2>(
    fn: (arg1: T1, arg2: T2) => Promise<void>
): (arg1: T1, arg2: T2) => Promise<[NullableError<TError>]>;
declare function PromiseToAsync<TError extends Error, T1, T2, TResult>(
    fn: (arg1: T1, arg2: T2) => Promise<TResult>
): (arg1: T1, arg2: T2) => Promise<[NullableError<TError>, TResult]>;

declare function PromiseToAsync<TError extends Error, T1, T2, T3>(
    fn: (arg1: T1, arg2: T2, arg3: T3) => Promise<void>
): (arg1: T1, arg2: T2, arg3: T3) => Promise<[NullableError<TError>]>;
declare function PromiseToAsync<TError extends Error, T1, T2, T3, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3) => Promise<TResult>
): (arg1: T1, arg2: T2, arg3: T3) => Promise<[NullableError<TError>, TResult]>;

declare function PromiseToAsync<TError extends Error, T1, T2, T3, T4>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<[NullableError<TError>]>;
declare function PromiseToAsync<TError extends Error, T1, T2, T3, T4, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<TResult>
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<[NullableError<TError>, TResult]>;

declare function PromiseToAsync<TError extends Error, T1, T2, T3, T4, T5>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<void>
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<[NullableError<TError>]>;
declare function PromiseToAsync<TError extends Error, T1, T2, T3, T4, T5, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<TResult>
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<[NullableError<TError>, TResult]>;

declare function PromiseToAsync<TError extends Error, T1, T2, T3, T4, T5, T6>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<void>
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<[NullableError<TError>]>;
declare function PromiseToAsync<TError extends Error, T1, T2, T3, T4, T5, T6, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<TResult>
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<[NullableError<TError>, TResult]>;

declare function PromiseToAsync(fn: Function): Function;

declare namespace PromiseToAsync {
    export function injectAsyncMethod(methodName: string): void;
}

export = PromiseToAsync;