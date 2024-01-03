function binarySearch(arr, target) {
    var l = 0;
    var r = arr.length - 1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == target) {
            return mid;
        }
        else if (arr[mid] < target) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
        return -1;
    }
}
var arr = [2, 12, 14, 23, 25, 34, 45, 56, 67, 78, 89, 90, 109];
var idx = binarySearch(arr, 40);
console.log(idx);
