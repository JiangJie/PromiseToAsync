const PromiseToAsync = require('..');

describe('Inject', () => {
    it('PromiseToAsync === promise.two', async () => {
        PromiseToAsync.injectAsyncMethod();

        const promise = Promise.resolve('promise resolved');

        const [, res1] = await PromiseToAsync(promise);
        const [, res2] = await promise.two();

        expect(res1).toBe(res2);
    });
});