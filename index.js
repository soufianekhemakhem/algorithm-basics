import decalage from "./src/decalage"
import maxEcart from "./src/maxEcart"
import palindrome from "./src/palindrome"
import inverse, { replaceAt } from "./src/inverse"
import isSorted from "./src/isSorted"
import longestSequence from "./src/longestSequence"
import fibonacci from "./src/fibonacci"
import maxOccurence from "./src/maxOccurence"
import maxOccurenceObject from "./src/maxOccurencePlus"


let result
let str = ""
let array = []
let number = 0

array = [9, 2, 7, 2, 0, 9, 9, 13]
result = decalage(array)
// console.log(result);

result = maxEcart(array)
console.log(result);

str = "2020"
result = palindrome(str)
// console.log(result);

str = "welcome"
result = inverse(str)
// console.log(result);

str = "fkvfkduddolddre"
result = maxOccurence(str)
// console.log(result);

array = [8, 9, 10, 11]
result = isSorted(array)
// console.log(result);

str = "abxmibfbizii"
result = maxOccurenceObject(str)
// console.log(result);

array = [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1]
result = longestSequence(array)
// console.log(result);

array = [0, 0, 0, 0, 0]
result = longestSequence(array)
// console.log(result);

number = 9
result = fibonacci(number)
// console.log(result);

str = "Hel?o world"
result = replaceAt(str, 3, "l")
// console.log(result);
