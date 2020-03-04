const replaceAt = (str, index, c) => {
    return str.substr(0, index) + c + str.substr(index + 1)
}
const inverse = (str) => {
    for (let i = 0; i < str.length / 2; i++) {
        let aux = str[i]
        // str[i] = str[str.length - 1 - i]
        str = replaceAt(str, i, str[str.length - 1 - i])

        // str[str.length - 1 - i] = aux
        str = replaceAt(str, str.length - 1 - i, aux)
    }
    return str
}

export default inverse