var arr = [
    [11, 12, 13, 14],
    [15, 16, 17, 18],
    [19, 20, 21, 22],
    [23, 24, 25, 26]
];
//////////////transform arr/////////////////////////////
function twoDimensionalArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr[0].length; j++) {
            var temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }
}
twoDimensionalArray(arr);
///////////////reverse arr//////////////
function reverse(arr) {
    var l = 0;
    var r = arr.length - 1;
    while (l < r) {
        var temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}
for (var i = 0; i < arr.length; i++) {
    reverse(arr[i]);
}
;
console.log(arr);
