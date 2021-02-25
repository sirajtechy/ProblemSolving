let unSortedArray = [2, 4, 7, 6, 5, 1, 9, 3, 8, 10, 20, 13, 12, 15, 14, 17, 19, 18, 11, 16, 32,89,78]


_mergeArrays = (a, b) => {
    const c = []

    while (a.length && b.length) {
        c.push(a[0] > b[0] ? b.shift() : a.shift())
    }
    while (a.length) {
        c.push(a.shift())
    }
    while (b.length) {
        c.push(b.shift())
    }
    return c
}

mergeSort = (unSortedArray) => {
    //round the number to its nearest integer 

    if (unSortedArray.length < 2) return unSortedArray
    const middle = Math.floor(unSortedArray.length / 2)
    const a_l = unSortedArray.slice(0, middle)
    const a_r = unSortedArray.slice(middle, unSortedArray.length)
    const sorted_l = mergeSort(a_l);
    const sortled_r = mergeSort(a_r);

    return _mergeArrays(sorted_l, sortled_r)

}

console.log(mergeSort(unSortedArray))




