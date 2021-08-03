/* eslint-disable semi */
/**
 * converts from celcius to fahrenheit
 * @params {Object} celcius - celcius value
 * @returns {number}
 */
function toFahrenheit (celcius) {
  return (9 * celcius + 32 * 5) / 5;
}

/**
 * converts from fahrenheit to celcius
 * @params {Object} fahrenheit - fahrenheit value
 * @returns {number}
 */
function toCelcius (fahrenheit) {
  const TEMPERATURE = 32;
  const DIVIDER = 5 / 9;
  return (fahrenheit - TEMPERATURE) * DIVIDER;
}

/**
 * adds first character of word to front end end of word
 * @params {Object} str - word
 * @returns {string}
 */
function addFrontBack (str) {
  const firstChar = str.charAt(0);
  return `${firstChar}${str}${firstChar}`;
}

/**
 * removes the char at given position
 * @params {Object} str - string , i - position of char
 * @returns {String}
 * @throws {Error}
 */
function removeChar (str, i) {
  if (i > str.length || i < 0) {
    throw Error({
      code: 1001,
      message: 'Index out of scope'
    });
  }
  return `${str.slice(0, i)}${str.substring(i + 1, str.length)}`;
}

/**
 * checks if the number in range of 40 and 60
 * @params {Object} num - number
 * @returns {boolean}
 */
function checkInRange (num) {
  const MAX_VALUE = 60;
  const MIN_VALUE = 40;
  return num >= MIN_VALUE && num <= MAX_VALUE;
}

/**
 * compares the numbers that in some range and returns the big one
 * @params {Object} num1, num2 - numbers that will be compared
 * @returns {number}
 * @throws {Error}
 */
function biggestinRange (num1, num2) {
  if (checkInRange(num1) && checkInRange(num2)) {
    return Math.max(num1, num2);
  }
  throw Error({
    code: 1001,
    message: 'Not in range'
  });
}

/**
 * makes the first n letter of string lower case
 * @params {Object} str - string , num - n
 * @returns {String}
 */
function firstnCharToLower (str, num) {
  let newStr = str.slice(0, num);
  newStr = newStr.toLowerCase();
  return newStr + str.substring(num, str.length);
}

/**
 * capitalizes the first letter of every word
 * @params {Object} str - string
 * @returns {String}
 */
function capFirstLetters (str) {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');
}

/**
 * sorts the letters of given word in alphabetical order
 * @params {Object} str - string
 * @returns {String}
 */
function sortAlph (str) {
  return str.split('').sort().join('');
}

/**
 * returns the n'th highest number in array
 * @params {Object} arr - number array , num - n
 * @returns {number}
 */
function nthHighestElement (arr, num) {
  return arr.sort((a, b) => a - b)[arr.length - num];
}

/**
 * returns most appeared number in array
 * @params {Object} arr - number array
 * @returns {number}
 */
function mostApperance (arr) {
  const map = new Map();
  let maxVal = 1;
  let mostApp;
  arr.forEach(function (key) {
    map.has(key) ? map.set(key, map.get(key) + 1) : map.set(key, 1);
    if (map.get(key) > maxVal) {
      maxVal = map.get(key);
      mostApp = key;
    }
  });
  return mostApp;
}

console.log(toFahrenheit(30));
console.log(toCelcius(86));
console.log(addFrontBack('Swift'));
console.log(removeChar('w3resource', 5));
console.log(biggestinRange(45, 60));
console.log(firstnCharToLower('PYTHON', 3));
console.log(capFirstLetters('the quick brown fox'));
console.log(sortAlph('Python'));
console.log(nthHighestElement([1, 2, 6, 4, 50, 0, 0, 0, 0], 1));
console.log(mostApperance([1, 12, 3, 12, 8, 8, 12, 9]));
