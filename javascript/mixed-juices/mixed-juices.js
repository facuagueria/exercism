// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
    let time = 0;
    switch (name) {
        case 'Pure Strawberry Joy':
            time = 0.5
            break;
        case 'Energizer':
        case 'Green Garden':
            time = 1.5
            break;
        case 'Tropical Island':
            time = 3
            break;
        case 'All or Nothing':
            time = 5
            break;
        default:
            time = 2.5
            break;
    }
    return time
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
    let index = 0;
    let totalWedges = 0
    let countLimes = 0

    while (index < limes.length && wedgesNeeded > 0 && totalWedges < wedgesNeeded) {
        switch (limes[index]) {
            case 'small':
                totalWedges += 6
                countLimes++
                index++
                break;
            case 'medium':
                totalWedges += 8
                countLimes++
                index++
                break;
            case 'large':
                totalWedges += 10
                countLimes++
                index++
                break;
        }
    }

    return countLimes
}
/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */

export function remainingOrders(timeLeft, orders) {
    let index = 0
    let totalTime = 0
    do {
        totalTime += timeToMixJuice(orders[index])
        orders.shift()
    } while (totalTime < timeLeft)

    return orders
}
