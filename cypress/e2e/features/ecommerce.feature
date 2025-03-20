Feature: e2e flow for ecommerce application

  Scenario: End to end ecommerce validation
    Given I am on Ecommerce Page
    When I login to the application
    And I add items to cart
    And Validate the total price limit and checkout
    Then Select the country submit the address and verify the success message
