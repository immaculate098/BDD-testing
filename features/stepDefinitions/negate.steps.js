const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
let answer = 0;

Given('i start with {int} for negate', function(input) {
    answer = input;
});

When('i negate', function() {
    answer = -answer;
});

Then('i end up with {int} for negate', function(input) {
    assert.equal(answer, input);
});
