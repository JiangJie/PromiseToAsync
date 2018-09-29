# PromiseToAsync

Convert promise to async function.

The new async function will return `[err, res]`, like nodejs callback style.

[![Build Status](https://travis-ci.org/JiangJie/PromiseToAsync.svg?branch=master)](https://travis-ci.org/JiangJie/PromiseToAsync)

## Example

```javascript
import PromiseToAsync from 'promise-to-async';

(async () => {
    const [err, res] = await PromiseToAsync(somePromise);

    if (err) {
        console.error(err);
    }

    // do something with res
})();
```