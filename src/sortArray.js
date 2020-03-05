const sortArray = (array) => {

    for (let i = 0; i < array.length - 1; i++) {
        let min = array[i]
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < min) {
                min = array[j]
                array[j] = array[i]
                array[i] = min
            }
        }
    }
    return array
}

export default sortArray
