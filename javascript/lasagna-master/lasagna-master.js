/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Calculates if the lasagna is ready or not by passing the param timeRemaining
 *
 * @param {number} timeRemaining
 * @returns {string} A text to know if the lasagna is ready or not
 */
export function cookingStatus(timeRemaining) {
    if (timeRemaining === undefined) return 'You forgot to set the timer.'
    if (timeRemaining === 0) {
        return 'Lasagna is done.'
    } else {
        return 'Not done, please wait.'
    }
}

/**
 * Calculates total minutes of preparation
 *
 * @param {String[]} layers
 * @param {number} minutesPerLayers
 * @returns {number} Total minutes of preparation
 */
export function preparationTime(layers, minutesPerLayers = 2) {
    return layers.length * minutesPerLayers
}

/**
 * Compute the amounts of noodles and sauce needed
 *
 * @param {String[]} layers
 * @returns {number} the quantity of noodles and sauce needed to make your meal.
 */
export function quantities(layers) {
    let noodles = 0
    let sauce = 0
    const response = {}

    for (let i = 0; i < layers.length; i++) {
        if (layers[i] === 'noodles') {
            noodles += 50
        }

        if (layers[i] === 'sauce') {
            sauce += 0.2
        }
    }
    response.noodles = noodles
    response.sauce = sauce

    return response
}

/**
 * Add the last ingredient of friendsList to myList
 *
 * @param {String[]} friendsList
 * @param {String[]} myList
 */
export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1])
}

/**
 * Add the last ingredient of friendsList to myList
 *
 * @param {Object} recipe
 * @param {Number} portions
 */
export function scaleRecipe(recipe, portions) {
    const newRecipe = {...recipe}

    for (const newRecipeKey in newRecipe) {
        newRecipe[newRecipeKey] = (newRecipe[newRecipeKey] / 2) * portions
    }

    return newRecipe
}
