const fibonacci = (n) => {

    if (n == 0) {
        return 0
    } else if (n == 1) {
        return 1
    }

    let n_2 = 0
    let n_1 = 1
    let result

    for (let i = 2; i <= n; i++) {
        result = n_2 + n_1
        n_2 = n_1
        n_1 = result
    }
    return result
}

export default fibonacci