# PromiseToAsync

Convert promise to async function.

The new async function will return `[err, res]`, like nodejs callback style.

## Example

```javascript
import PromiseToAsync from 'PromiseToAsync';

(async () => {
    const [err, res] = await PromiseToAsync(somePromise);

    if (err) {
        console.error(err);
    }

    // do something with res
})();
```