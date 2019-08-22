/**
 * @description Convert promise to async function and return [err, res].
 * @date 2019-08-22
 * @export
 * @param {Promise|any} promise promise to be converted.
 * @returns {Promise<[err, res]>} Promise<[err, res]>
 */
const convertPromise = async promise => {
    let hasError = false;

    // use `Promise.resolve` to convert any to Promise.
    const errOrRes = await Promise.resolve(promise).catch(err => {
        hasError = true;
        return err;
    });

    // return [err, res]
    return hasError ? [errOrRes] : [null, errOrRes];
};

/**
 * @description Convert a promisify function which return promise to async function and return [err, res].
 * @date 2019-08-22
 * @param {Function} promisifyFn promisify function to be converted.
 * @returns {Function}
 */
const convertPromiseFn = promisifyFn => {
    function fn(...args) {
        const promise = promisifyFn.call(this, ...args);
        return convertPromise(promise);
    }

    // reserve `this`
    Object.setPrototypeOf(fn, Object.getPrototypeOf(promisifyFn));

    return fn;
};

/**
 * @description Convert a promise or a promisify function which return promise to async function and return [err, res].
 * @date 2019-08-22
 * @export
 * @param {Promise|any} promiseOrFn promise or promisify function to be converted.
 * @returns {Promise<[err, res]>} Promise<[err, res]>
 */
const PromiseToAsync = promiseOrFn => {
    return typeof promiseOrFn === 'function' ? convertPromiseFn(promiseOrFn) : convertPromise(promiseOrFn);
};

/**
 * @description Inject an async method to Promise.
 * @date 2018-09-29
 * @param {string} [methodName='two'] method name to be injected, default is `two`.
 */
PromiseToAsync.injectAsyncMethod = (methodName = 'two') => {
    if (Promise.prototype[methodName]) return;

    Promise.prototype[methodName] = function () {
        // this is promise self.
        return convertPromise(this);
    };
};

module.exports = PromiseToAsync;