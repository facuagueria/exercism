// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

const DAYS_PER_WEEK = 7

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
    let totalCount = 0;
    for (let i = 0; i < birdsPerDay.length ; i++) {
        totalCount += birdsPerDay[i]
    }
    return totalCount
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */

export function birdsInWeek(birdsPerDay, week) {
    let totalCount = 0;
    const days = week * DAYS_PER_WEEK - 7
    const birdsForThatWeek = birdsPerDay.splice(days, 7)
    for (let i = 0; i < birdsForThatWeek.length ; i++) {
        totalCount += birdsForThatWeek[i]
    }
    return totalCount
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length ; i++) {
        if (i % 2 === 0) {
            birdsPerDay[i]++
        }
    }
    return birdsPerDay
}
