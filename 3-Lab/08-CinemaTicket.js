function cinemaTicketPrice(input) {
    let day = (input[0]);
    let ticketPrice = 0;
    switch (day) {
        case "Monday":
            ticketPrice = 12;
        case "Tuesday":
            ticketPrice = 12;
            break;
        case "Wednesday":
            ticketPrice = 14;
        case "Thursday":
            ticketPrice = 14;
            break;
        case "Friday":
            ticketPrice = 12;
            break;
        case "Saturday":
            ticketPrice = 16;
            break;
        case "Sunday":
            ticketPrice = 16;
            break;
    }
    console.log(ticketPrice);
}

cinemaTicketPrice(["Monday"]); // 12
cinemaTicketPrice(["Friday"]); // 12
cinemaTicketPrice(["Sunday"]); // 16