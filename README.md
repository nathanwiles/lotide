# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @falcre/lotide`

**Require it:**

`const _ = require('@falcre/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* 'assertArraysEqual(array1, array2)' : compare two arrays and returns true if they are equal.
* 'assertEqual(actual, expected)' : compare two values, log indication message to the console.
* 'assertObjectsEqual(actual, expected)' : compares two objects and logs indication message to the console.
* 'countLetters(string)' : counts the number of letters in a string and returns an object with the count.
* 'countOnly(allItems, itemsToCount)' : counts the number of times an item appears in an array and returns .an object with the count.
* 'eqArrays(array1, array2)' : compares two arrays and returns true if they are equal.
* 'eqObjects(object1, object2)' : compares two objects and returns true if they are equal.
* 'findKey(object, callback)' : returns the first key for which the callback returns a truthy value.
* 'findKeyByValue(object, value)' : returns the first key for which the value is found.
* 'flatten(array)' : flattens nested array into a single-level array.
* 'head(array)' : returns the first element of an array.
* 'letterPositions(string)' : returns an object with the index of each letter in a string.
* 'map(array, callback)' : returns a new array based on the results of the callback function.
* 'middle(array)' : returns the middle element(s) of an array.
* 'tail(array)' : returns the tail of an array.
* 'takeUntil(array, callback)' : returns a slice of an array until the callback returns a truthy value.
* 'without(source, itemsToRemove)' : returns a new array with the passed items removed.