"use strict";

// The legit calculator. Boring on purpose: this is the trusted package a developer
// happily depends on, right up until someone ships a version they did not write.

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw new Error("division by zero");
  }
  return a / b;
}

module.exports = { add, sub, mul, div };
