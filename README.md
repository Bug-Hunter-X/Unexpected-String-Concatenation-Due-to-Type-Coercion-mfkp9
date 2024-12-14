# Unexpected String Concatenation in JavaScript

This repository demonstrates a common yet subtle error in JavaScript related to type coercion during arithmetic operations.  The `foo` function intends to add two numbers, but due to type coercion, it performs string concatenation when one of the arguments is a string.

## Bug

The `bug.js` file contains the problematic code, which unexpectedly concatenates the number and the string instead of performing numerical addition.

## Solution

The `bugSolution.js` demonstrates how to correctly handle this situation by explicitly converting both operands to numbers before performing the addition.