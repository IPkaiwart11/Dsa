var arr = [
    [11, 12, 13, 14],
    [15, 16, 17, 18],
    [19, 20, 21, 22],
    [23, 24, 25, 26]
];
var snak = "";
function snake(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (i % 2 == 0) {
            for (var j = arr.length - 1; j >= 0; j--) {
                snak += arr[i][j];
            }
        }
        else {
            for (var j = 0; j < arr.length; j++) {
                snak += arr[i][j];
            }
        }
        snak += "\n";
    }
}
snake(arr);
console.log(snak);
