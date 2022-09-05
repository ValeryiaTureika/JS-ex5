Feature: Booking a seat
    Scenario: Should book one seat
        Given user is on "/client/index.php" page
        When user chooses by day "5"
        When user chooses movie "2" show "2"
        When user chooses seat Vip "1"
        When user click "button"
        Then user sees text "Вы выбрали билеты:"
        Then user sees the reserved seat "1/2"

    Scenario: Should book two seats
        Given user is on "/client/index.php" page
        When user chooses by day "6"
        When user chooses movie "1" show "3"
        When user chooses seat "5", "6"
        When user chooses seat "5", "7"
        When user click "button"
        Then user sees text "Вы выбрали билеты:"
        Then user sees the reserved seat "5/6, 5/7"

    Scenario: Should not book
        Given user is on "/client/index.php" page
        When user chooses by day "2"
        When user chooses movie "2" show "3"
        When user click "button"
        Then user sees the header "Фильм 3"
