var arr = [2, 3, 4, -7, -9, 2, 3, -5, 10, 7, 1];
function maxSubArray(arr) {
    var train = 0;
    var maxi = 0;
    for (var i = 0; i < arr.length; i++) {
        var newtrain = arr[i];
        var sittrainWithPre = newtrain + arr[i];
        train = Math.max(newtrain, sittrainWithPre);
        maxi = Math.max(maxi, train);
    }
    return maxi;
}
console.log(maxSubArray(arr));
