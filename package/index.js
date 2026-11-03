#!/usr/bin/env node
"use strict";

const { add, sub, mul, div } = require("./src/calc");

const ops = { add, sub, mul, div };

function main(argv) {
  const [op, a, b] = argv;
  if (!op || !ops[op]) {
    console.log("usage: calculator <add|sub|mul|div> <a> <b>");
    return op ? 1 : 0;
  }
  console.log(ops[op](Number(a), Number(b)));
  return 0;
}

if (require.main === module) {
  process.exit(main(process.argv.slice(2)));
}

module.exports = { main };
