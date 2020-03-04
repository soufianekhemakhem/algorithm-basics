const longestSequence = (T) => {

    let startResult = -1
    let lengthResult = 0

    let startCurrent
    let lengthCurrent

    let inSequence = false

    for (let i = 0; i < T.length; i++) {

        if (T[i] == 1) {
            if (inSequence == false) {
                startCurrent = i
                lengthCurrent = 1
                inSequence = true
            } else {
                lengthCurrent++
            }
        } else {
            if (lengthCurrent > lengthResult) {
                startResult = startCurrent
                lengthResult = lengthCurrent
                inSequence = false
            }
        }
    }

    if (lengthCurrent > lengthResult) {
        startResult = startCurrent
        lengthResult = lengthCurrent
    }

    return startResult
}

export default longestSequence