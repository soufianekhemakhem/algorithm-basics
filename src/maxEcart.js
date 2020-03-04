const maxEcart = (array) => {

    let max = array[0]
    let min = array[0]

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }

        if (array[i] < min) {
            min = array[i]
        }
    }

    let ecart = max - min

    return ecart
}

export default maxEcart