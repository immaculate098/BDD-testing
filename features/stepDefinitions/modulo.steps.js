const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let answer = 0;

Given('i start with {int}', function(input) {
    answer = input;
});

When('i modulo {int}', function(input) {
    answer %= input;
});

Then('i end up with {int}', function(input){
    assert.equal(answer, input);
});