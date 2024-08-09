Feature: Less Than Comparison

  Scenario: Less Than operation
    Given i start with 5 for lessthan
    When i compare less than 3
    Then i end up with false for lessthan
