Feature: Booking a seat
    Scenario: Should book one seat
        Given user is on "/client/index.php" page
        When user chooses by "nav > a:nth-child(2) > span.page-nav__day-number"
        When user chooses movie "main > section:nth-child(2) > div.movie-seances__hall > ul > li > a"
        When user chooses seat "section  div:nth-child(1) > span.buying-scheme__chair.buying-scheme__chair_vip"
        When user click "button"
        Then user sees text "Вы выбрали билеты:"
        Then user sees the reserved seat "1/2"

    Scenario: Should book two seats
        Given user is on "/client/index.php" page
        When user chooses by "nav > a:nth-child(2) > span.page-nav__day-number"
        When user chooses movie "main > section:nth-child(2) > div:nth-child(3) > ul > li > a"
        When user chooses seat "main > section div:nth-child(7) > span:nth-child(3)"
        When user chooses seat "main > section div:nth-child(7) > span:nth-child(4)"
        When user click "button"
        Then user sees text "Вы выбрали билеты:"
        Then user sees the reserved seat "7/3, 7/4"

    Scenario: Should not book
        Given user is on "/client/index.php" page
        When user chooses by "nav > a:nth-child(2) > span.page-nav__day-number"
        When user chooses movie "main > section:nth-child(2) > div:nth-child(2) > ul > li > a"
        When user chooses seat "main > section div:nth-child(4) > span:nth-child(6)"
        Then user sees the header "Фильм 3"
