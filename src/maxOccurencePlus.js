const indexOfLetter = (T, c) => {

    for (let i = 0; i < T.length; i++) {
        if (T[i].letter == c) {
            return i
        }
    }
    return -1
}

let array = [{
    letter: "a",
    occurence: 1
},
{
    letter: "b",
    occurence: 4
},
{
    letter: "f",
    occurence: 1
}]


let result = indexOfLetter(array, "c")
// console.log(result);

const maxOccArray = (T) => {

    let max = T[0].occurence
    let letter = T[0].letter

    for (let i = 0; i < T.length; i++) {
        if (T[i].occurence > max) {
            max = T[i].occurence
            letter = T[i].letter
        }
    }
    return letter
}

const maxOccurenceObject = (str) => {
    let T = []
    for (let i = 0; i < str.length; i++) {
        const index = indexOfLetter(T, str[i])

        if (index < 0) {
            T.push({ letter: str[i], occurence: 1 })
        } else {
            T[index].occurence++
        }
    }
    const letter = maxOccArray(T)
    return letter
}

export default maxOccurenceObject