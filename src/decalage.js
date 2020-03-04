const decalage = (array) => {

    let x = array[array.length - 1]

    for (let i = array.length - 1; i > 0; i--) {

        array[i] = array[i - 1]

    }

    array[0] = x

    return array
}

export default decalage