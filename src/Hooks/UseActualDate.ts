
export const UseActualDate = () => {
    const currentDate = new Date()
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const monthName = monthNames[currentDate.getMonth()];
    const dayName = dayNames[new Date().getDay()];
    const dayNumber = currentDate.getDate()



    return [dayName, dayNumber, monthName]
}
