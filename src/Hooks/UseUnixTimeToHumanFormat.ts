export const UseUnixTimeToHumanFormat = (unixTime: number): string => {


    const milliseconds = unixTime * 1000
    const dateObject = new Date(milliseconds)
    const hour = dateObject.toLocaleString("en-US", { hour: "numeric", hour12: false })
    const minutes = dateObject.toLocaleString("en-US", { minute: "numeric" })
    const doubleDigitMinutes= ('0' + minutes).slice(-2)

    return `${hour}:${doubleDigitMinutes}`

}
