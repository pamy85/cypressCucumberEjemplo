Feature: Login

  Scenario: Successful login
    Given I visit the login page
    When I fill in the login form with valid credentials
    Then I should be redirected to the dashboard

  Scenario: Login with invalid credentials
    Given I visit the login page
    When I fill in the login form with invalid credentials
    Then I should see an error message

  Scenario: Login with empty fields
    Given I visit the login page
    When I submit the login form without filling any fields
    Then I should see validation messages