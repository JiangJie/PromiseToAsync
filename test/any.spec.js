const PromiseToAsync = require('..');

describe('Any', () => {
    it('err === null, res === param self', async () => {
        const any = {};

        const [err, res] = await PromiseToAsync(any);

        expect(err).toBe(null);
        expect(res).toBe(any);
    });
});