let search = [2, 4, 6, 8, 10, 6]
seqSearch = (search, no) => {
    for (let i = 0; i < search.length; i++) {
        if (search[i] == no) {
            return no;
        }

    }
}

// console.log(seqSearch(search,6))

meWord = " Siraj Shaheen LuqmanSv "
lengthOfWord = (s) => {
    s = s.trim()
    // s = s.replace(/^\s+|\s+$/g,'');
    var arr = s.split(' ');
    return arr[arr.length-1].length;
}

// console.log(lengthOfWord(meWord))

