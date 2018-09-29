const PromiseToAsync = require('..');

describe('Promise', () => {
    describe('resolve', () => {
        it('err === null, res === resolved result', async () => {
            const [err, res] = await PromiseToAsync(Promise.resolve('promise resolved'));

            expect(err).toBe(null);
            expect(res).toBe('promise resolved');
        });
    });

    describe('reject', () => {
        it('err === rejected error', async () => {
            const [err] = await PromiseToAsync(Promise.reject('promise rejected'));

            expect(err).toBe('promise rejected');
        });
    });
});