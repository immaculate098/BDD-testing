const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
let answer = 0;
let comparisonResult = false;

Given('i start with {int} for greaterthan', function(input) {
    answer = input;
});

When('i compare greater than {int}', function(input) {
    comparisonResult = answer > input;
});

Then('i end up with true for greaterthan', function() {
    assert.equal(comparisonResult, true);
});

Then('i end up with false for greaterthan', function() {
    assert.equal(comparisonResult, false);
});
