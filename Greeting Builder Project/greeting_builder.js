function formatName(firstName, lastName){
    return firstName + " " + lastName;
}

function getGreeting(timeOfDay) {
    switch(timeOfDay) {
        case "morning":
            return "Good morning";
            break;
        case "evening":
            return "Good evening";
            break;
        case "afternoon":
            return "afternoon";
            break;
        default:
            return "Time of day isnt valid.";
            break;
    }
}

function createGreeting(firstName, lastName, timeOfDay) {
    return getGreeting(timeOfDay) + ", " + formatName(firstName, lastName);
}

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));
