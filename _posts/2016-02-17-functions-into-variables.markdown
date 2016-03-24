---
layout: post
title: "Functions into variables"
date: "2016-02-17"
---
var doSomething = function(thing) {
    thing();
}

var sayBigDeal = function() {
    var message = "I’m kind of a big deal";
    log(message);
}

doSomething(sayBigDeal);
// I’m kind of a big deal

This ability to put functions into variables is sometimes described by saying “functions are first class objects in JavaScript.” What that means is just that functions (mostly) aren’t treated differently to other data types like objects or strings.



JavaScript lets us pass functions as parameters to other functions:

function addMagic(id, effect) {
    var element = document.getElementById(id);
    element.className += ' magic';
    effect(element);
}

addMagic('unicorn', spin);
addMagic('fairy', sparkle);
addMagic('kitten', rainbow);

{source http://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-intro/}

what if we’re repeating the same function lots of times? For example:

function addColour(colour) {
    var rainbowEl = document.getElementById('rainbow');
    var div = document.createElement('div');
    div.style.paddingTop = '10px';
    div.style.backgroundColour = colour;
    rainbowEl.appendChild(div);
}

addColour('red');
addColour('orange');
addColour('yellow');
addColour('green');
addColour('blue');
addColour('purple');


That addColour function is called rather a lot. We are repeating ourselves—something we wish to avoid. One way to refactor it is to move the list of colours into an array, and call addColour in a for-loop:

var colours = [
    'red', 'orange', 'yellow',
    'green', 'blue', 'purple'
];

for (var i = 0; i < colours.length; i = i + 1) {
    addColour(colours[i]);
}

This code is perfectly fine. It gets the job done, and it is less repetitive than the previous version. But it’s not particularly expressive.


For-Each

Since JavaScript lets us pass a function as a parameter to another function, writing a forEach function is relatively straightforward:

function forEach(callback, array) {
    for (var i = 0; i < array.length; i = i + 1) {
        callback(array[i], i);
    }


    forEach(addColour, colours);

## Reduce
let’s consider two similar problems:

    Given an array of numbers, calculate the sum; and
    Given an array of words, join them together with a space between each word.[1]
    the ‘procedural’ way to solve these problems is, again, with for-loops:

    // Given an array of numbers, calculate the sum
    var numbers = [1, 3, 5, 7, 9];
    var total = 0;
    for (i = 0; i < numbers.length; i = i + 1) {
        total = total + numbers[i];
    }
    // total is 25

    // Given an array of words, join them together with a space between each word.
    var words = ['sparkle', 'fairies', 'are', 'amazing'];
    var sentence = '';
    for (i = 0; i < words.length; i++) {
        sentence = sentence + ' ' + words[i];
    }
    // ' sparkle fairies are amazing'

    Let’s refactor the inner part of each loop, and turn it into a function:

var add = function(a, b) {
    return a + b;
}

// Given an array of numbers, calculate the sum
var numbers = [1, 3, 5, 7, 9];
var total = 0;
for (i = 0; i < numbers.length; i = i + 1) {
    total = add(total, numbers[i]);
}
// total is 25

function joinWord(sentence, word) {
    return sentence + ' ' + word;
}

// Given an array of words, join them together with a space between each word.
var words = ['sparkle', 'fairies', 'are', 'amazing'];
var sentence = '';
for (i = 0; i < words.length; i++) {
    sentence = joinWord(sentence, words[i]);
}
// 'sparkle fairies are amazing'



this is hardly more concise but the pattern becomes clearer. Both inner functions take the working variable as their first parameter, and the current array element as the second. Now that we can see the pattern more clearly, we can move those untidy for-loops into a function:

var reduce = function(callback, initialValue, array) {
    var working = initialValue;
    for (var i = 0; i < array.length; i = i + 1) {
        working = callback(working, array[i]);
    }
    return working;
};


Now we have a shiny new reduce function, let’s take it for a spin:

var total = reduce(add, 0, numbers);
var sentence = reduce(joinWord, '', words);





Once you understand the patterns that map and reduce are suited to, you may find yourself never needing to write an old-style for-loop again.
