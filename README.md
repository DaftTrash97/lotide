# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dafttrash197/lotide`

**Require it:**

`const _ = require('@dafttrash197/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: takes in two arrays and console.logs a message if they are a perfect match or not 
* `assertEqual`: compares two values and prints out a message telling us if they match or not
* `assertObjectsEqual`: takes in two objects and console.logs a message to the console if they are a perfect match or not 
* `countLetters`: takes in a sentence (as a string) and then returns a count of each of the letters in that sentence
* `countOnly`: takes in a collection of items and returns counts for a specific subset of those items
* `eqArrays`: takes in two arrays and returns true or false, based on a perfect match
* `eqObjects`: takes in two objects and returns true or false, based on a perfect match
* `findKey`: takes in an object and a callback and returns the first key for which the callback returns a truthy value, If no key is found, then it returns undefined
* `findKeyByValue`: takes in an object and a value and returns the first key which contains the given value If no key with that given value is found then  returns undefined
* `flatten`: takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array
* `head`: function which returns the first item in the array
* `letterPositions`: takes in a string and returns all the indices (zero-based positions) in the string where each character is found
* `map`: takes in two arguments, an array to map and a callback function. The function will return a new array based on the results of the callback function
* `middle`: takes in an array and returns the middle-most element(s) of the given array
* `tail`: function that retruns everything except for the first item of the provided array
* `takeUntil`: takes in item in the array and returns a slice of the array with elements taken from the beginning and continues until the callback returns a truthy value
* `Without`: returns a subset of a given array, removing unwanted elements

