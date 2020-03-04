const maxOccurence = (str) => {

    let T1 = []
    let T2 = []

    for (let i = 0; i < str.length; i++) {
        if (T1.indexOf(str[i]) < 0) {
            T1.push(str[i])
            T2.push(1)
        } else {
            let index = T1.indexOf(str[i])
            T2[index]++
        }

    }

    let max = T2[0]
    let maxIndex = 0
    for (let i = 1; i < T2.length; i++) {
        if (T2[i] > max) {
            max = T2[i]
            maxIndex = i
        }
    }

    // console.log(T1);
    // console.log(T2);


    return T1[maxIndex]

}

export default maxOccurence