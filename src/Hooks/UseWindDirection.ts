
export const UseWindDirection = (windDegree: number): [string, number] => {

    let cardinalDirection!: string
    let degreesToRotate!: number
    const degreeDirections = [
        [0, 11.25, 'N', 0],
        [11.25, 33.75, 'NNE', 22.5],
        [33.75, 56.25, 'NE', 45],
        [56.25, 78.75, 'ENE', 67.5],
        [78.75, 101.25, 'E', 90],
        [101.25, 123.75, 'ESE', 112.5],
        [123.75, 146.25, 'SE', 135],
        [146.25, 168.75, 'SSE', 157.5],
        [168.75, 191.25, 'S', 180],
        [191.25, 213.75, 'SSW', 202.5],
        [213.75, 236.25, 'SW', 225],
        [236.25, 258.75, 'WSW', 247.5],
        [258.75, 281.25, 'W', 270],
        [281.25, 303.75, 'WNW', 292.5],
        [303.75, 326.25, 'NW', 315],
        [326.25, 360, 'NNW', 337.5]
    ]

    degreeDirections.forEach(degree => {
        const [leftLimit, rightLimit, cardinalDirect, amountDegreeToRotateWindIndicator] = degree
        if (windDegree >= leftLimit && windDegree <= rightLimit) {
            cardinalDirection = cardinalDirect as string
            degreesToRotate = amountDegreeToRotateWindIndicator as number
        }
    })

    return [cardinalDirection, degreesToRotate] 
}
