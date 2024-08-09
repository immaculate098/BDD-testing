const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
let answer = 0;

Given('i start with {int} for bitwise', function(input) {
    answer = input;
});

When('i bitwise or {int}', function(input) {
    answer |= input;
});

Then('i end up with {int} for bitwise', function(input) {
    assert.equal(answer, input);
});
