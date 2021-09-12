#Smoke#Regression
Feature: User Login
  Scenario: Sucessful Login
    Given User is on the "Home" page on URL "https://demo.actitime.com/login.do"
    When User fill in "Username" with "admin"
    And User fill in "Password" with "manager"
    And User click on the "Login" button
    Then User should be on the "Time Entry" page on URL "https://demo.actitime.com/user/submit_tt.do"
    And User should see the "Logout" button
    And User close the browser

  Scenario Outline: Multiple User Login
    Given User is on the "Home" page on URL "https://demo.actitime.com/login.do"
    When User fill in login credentials with "<username>" and "<password>"
    And User click on the "Login" button
    Then User should be on the "Time Entry" page on URL "https://demo.actitime.com/user/submit_tt.do"
    And User should see the "Logout" button
    And User close the browser

    Examples:
      |username |password|
      |admin    |manager|
      |admin    |manager|

  Scenario: Invalid Login
    Given User is on the "Home" page on URL "https://demo.actitime.com/login.do"
    When User fill in "Username" with "xyz"
    And User fill in "Password" with "xyz"
    And User click on the "Login" button
    Then User should see "Error Message" message


