const factorielle = (n) => {

    let produit = 1
    for (let i = 1; i <= n; i++) {
        produit *= i
    }
    return produit
}

export default factorielle