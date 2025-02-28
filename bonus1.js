function workTime(start, end) {
    const [sh, sm] = start.split(":").map(Number);
    const [eh, em] = end.split(":").map(Number);
    
    const startMin = sh * 60 + sm;
    const endMin = eh * 60 + em;

    if (endMin < startMin) return "Xato: tugash vaqti boshlanish vaqtidan oldin bo'lishi mumkin emas";

    const diff = endMin - startMin;
    return `Ish vaqti: ${Math.floor(diff / 60)} soat ${diff % 60} daqiqa`;
}

console.log(workTime("09:00", "17:30"));
console.log(workTime("10:00", "09:00")); 
console.log(workTime("08:15", "12:45"));
