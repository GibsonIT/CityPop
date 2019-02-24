/**
 * Formats a string so each word is lowercase with first letter uppercase
 * Example: 'united STATES' returns 'United States'
 * @param {string} str - string to be formatted
 * @returns a formatted string
 */

export function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
}
     

/**
     * Takes in a number to format with spaces between every third number
     * Example: 12345678 returns 12 345 678
     * @param {Number} num - number to format
     * @returns {string} - formatted number
     */
export function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
}
