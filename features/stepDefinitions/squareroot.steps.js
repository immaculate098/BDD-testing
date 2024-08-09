const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
let answer = 0;

Given('i start with {int} for squareroot', function(input) {
    answer = input;
});

When('i take the square root', function() {
    answer = Math.sqrt(answer);
});

Then('i end up with {int} for squareroot', function(input) {
    assert.equal(answer, input);
});
