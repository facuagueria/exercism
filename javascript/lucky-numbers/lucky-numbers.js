// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
    const arrayOne = String(array1).replaceAll(',', '')
    const arrayTwo = String(array2).replaceAll(',', '')
    return Number(arrayOne) + Number(arrayTwo)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
    const reversedValue = Array.from(String(value), (num) => Number(num)).reverse()
    return value === Number(reversedValue.join(',').replaceAll(',', ''))
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
    if (!Boolean(input)) return 'Required field'
    if (!Number(input)) return 'Must be a number besides 0'
    if (Number(input)) return ''
}
