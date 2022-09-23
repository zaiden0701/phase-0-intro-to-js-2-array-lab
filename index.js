const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push('Ralph')
}

function destructivelyPrependCat(){
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(){
    const moreCats = [...cats, 'Broom']
    return moreCats
}

function prependCat(){
    const evenMoreCats = ['Arnold',...cats]
    return evenMoreCats
}

function removeLastCat(){
    const popCat = [...cats]
    popCat.pop()
    return popCat
}

function removeFirstCat(){
    const shiftCat = [...cats]
    shiftCat.shift()
    return shiftCat
}