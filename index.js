/**
 * @description Convert promise to async function and return [err, res].
 * @date 2018-09-28
 * @export
 * @param {Promise|any} promise promise to be converted.
 * @returns {Array} [err, res]
 */
const PromiseToAsync = async promise => {
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
 * @description Inject an async method to Promise.
 * @date 2018-09-29
 * @param {string} [methodName='two'] method name to be injected, default is `two`.
 * @returns {undefined}
 */
PromiseToAsync.injectAsyncMethod = (methodName = 'two') => {
    if (Promise.prototype[methodName]) return;

    Promise.prototype[methodName] = function () {
        // this is promise self.
        return PromiseToAsync(this);
    };
}

module.exports = PromiseToAsync;