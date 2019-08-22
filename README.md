# PromiseToAsync

[![NPM version](https://img.shields.io/npm/v/promise-to-async.svg?style=flat-square)](https://www.npmjs.com/package/promise-to-async)
[![Build Status](https://travis-ci.org/JiangJie/PromiseToAsync.svg?branch=master)](https://travis-ci.org/JiangJie/PromiseToAsync)
[![Coverage Status](https://coveralls.io/repos/github/JiangJie/PromiseToAsync/badge.svg?branch=master)](https://coveralls.io/github/JiangJie/PromiseToAsync?branch=master)
[![GitHub license](https://img.shields.io/github/license/JiangJie/PromiseToAsync.svg)](https://github.com/JiangJie/PromiseToAsync/blob/master/LICENSE)
[![devDependencies Status](https://david-dm.org/JiangJie/PromiseToAsync/dev-status.svg)](https://david-dm.org/JiangJie/PromiseToAsync?type=dev)

[![npm](https://img.shields.io/npm/dt/promise-to-async.svg)](https://www.npmjs.com/package/promise-to-async)

[![NPM](https://nodei.co/npm/promise-to-async.png?downloads=true)](https://nodei.co/npm/promise-to-async/)

Convert promise or promisify function to async function.

The new async function will return `[err, res]`, like nodejs callback style.

## Install

```javascript
npm install promise-to-async --save
```

## Example

```javascript
import PromiseToAsync from 'promise-to-async';

(async () => {
    const promise = Promise.resolve('promise resolved');

    const [err, res] = await PromiseToAsync(promise);

    console.assert(err === null);
    console.assert(res === 'promise resolved');
})();

(async () => {
    const util = require('util');
    const fs = require('fs');

    const promise = util.promisify(fs.readdir)('/');

    const [err, res] = await PromiseToAsync(promise);
})();
// same as
(async () => {
    const util = require('util');
    const fs = require('fs');

    const readdir = PromiseToAsync(util.promisify(fs.readdir));

    const [err, res] = await readdir('/');
})();
```

Or by inject.

```javascript
import PromiseToAsync from 'promise-to-async';
// inject
PromiseToAsync.injectAsyncMethod('two'); // method name default is two

(async () => {
    const promise = Promise.resolve('promise resolved');

    const [err, res] = await promise.two();

    console.assert(err === null);
    console.assert(res === 'promise resolved');
})();
```