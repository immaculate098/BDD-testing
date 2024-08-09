const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
let answer = 0;

Given('i start with {int} for power', function(input) {
    answer = input;
});

When('i power {int}', function(input) {
    answer = Math.pow(answer, input);
});

Then('i end up with {int} for power', function(input) {
    assert.equal(answer, input);
});
