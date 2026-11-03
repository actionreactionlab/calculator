"use strict";

const assert = require("node:assert");
const { add, sub, mul, div } = require("../src/calc");

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(sub(5, 3), 2);
assert.strictEqual(mul(4, 3), 12);
assert.strictEqual(div(12, 4), 3);
assert.throws(() => div(1, 0), /division by zero/);

console.log("ok: all calculator tests passed");
