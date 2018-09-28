/**
 * @description Convert promise to async function and return [err, res].
 * @author jiang115jie@gmail.com
 * @date 2018-09-28
 * @export
 * @param {Promise} promise
 * @returns {Array} [err, res]
 */
const PromiseToAsync = promise => {
    let hasError = false;

    // use `Promise.resolve` to convert any to Promise.
    const errOrRes = await Promise.resolve(promise).catch(err => {
        hasError = true;
        return err;
    });

    // return [err, res]
    return hasError ? [errOrRes] : [null, errOrRes];
};

export default PromiseToAsync;