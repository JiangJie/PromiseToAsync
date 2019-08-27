type NullableError<TError extends Error> = TError | null;
type UnPromisify<T> = T extends Promise<infer U> ? U : never;

declare function PromiseToAsync<TError extends Error>(promise: Promise<void>): Promise<[NullableError<TError>]>;
declare function PromiseToAsync<TError extends Error, TResult>(promise: Promise<TResult>): Promise<[NullableError<TError>, TResult]>;

declare function PromiseToAsync<TError extends Error, F extends (...args: any) => any>(
    fn: F
): (...args: Parameters<F>) => Promise<[NullableError<TError>, UnPromisify<ReturnType<F>>]>;

declare function PromiseToAsync(fn: Function): Function;

declare namespace PromiseToAsync {
    export function injectAsyncMethod(methodName: string): void;
}

export = PromiseToAsync;