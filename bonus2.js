function findDay(days) {
    const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const week = ["dushanba", "seshanba", "chorshanba", "payshanba", "juma", "shanba", "yakshanba"];
    
    let monthIndex = 0;

    while (days > months[monthIndex]) {
        days -= months[monthIndex];
        monthIndex++;
    }

    return `${monthIndex + 1} - oy, ${week[(days - 1) % 7]}`;
}

console.log(findDay(75));
console.log(findDay(365));
console.log(findDay(1));
