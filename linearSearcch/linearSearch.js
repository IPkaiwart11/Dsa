function linearSearch(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}
var arr = [10, 12, 23, 34, 45, 56, 67, 68, 70, 72, 80, 85, 90];
var idx = linearSearch(arr, 72);
console.log(idx);
