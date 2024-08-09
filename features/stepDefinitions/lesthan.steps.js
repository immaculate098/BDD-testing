const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
let answer = 0;
let comparisonResult = false;

Given('i start with {int} for lessthan', function(input) {
    answer = input;
});

When('i compare less than {int}', function(input) {
    comparisonResult = answer < input;
});

Then('i end up with true for lessthan', function() {
    assert.equal(comparisonResult, true);
});

Then('i end up with false for lessthan', function() {
    assert.equal(comparisonResult, false);
});
