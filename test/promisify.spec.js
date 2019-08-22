const PromiseToAsync = require('..');
const util = require('util');

const callbackWithoutError = fn => {
    fn(null, 'callbackWithoutError');
};
const callbackWithError = fn => {
    fn(new Error('callbackWithError'));
};

describe('Promisify', () => {
    describe('callbackWithoutError', () => {
        it('err === null, res === callbackWithoutError', async () => {
            const [err, res] = await PromiseToAsync(util.promisify(callbackWithoutError))();

            expect(err).toBe(null);
            expect(res).toBe('callbackWithoutError');
        });
    });

    describe('callbackWithError', () => {
        it('err === callbackWithError', async () => {
            const [err] = await PromiseToAsync(util.promisify(callbackWithError))();

            expect(err.message).toBe('callbackWithError');
        });
    });
});