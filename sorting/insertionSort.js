
let numbers = [1, 4, 1, 2, 7, 5, 2];

function insertion_sort(A) {
    var len = A.length;
    var i = 1;
    while (i < len) {
        var x = A[i];
        var j = i - 1;
        while (j >= 0 && A[j] > x) {
            A[j + 1] = A[j];
            j = j - 1;
        }
        A[j+1] = x;
      i = i + 1;
    }
}

console.log(insertion_sort(numbers))
