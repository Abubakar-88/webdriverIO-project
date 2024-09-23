Feature: The Internet Guinea Pig Website
** As Employee I want to login my dashboard so that I can access my dashboard **

  @myTag
  Scenario: I can login in my dashboard without any error
    Given I am on the login page
    When I enter "testpilot@gmail.com" in the username field
    And I enter "1234" in the password field
    And I click on the login button
    Then I should see the dashboard page
