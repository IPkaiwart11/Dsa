function printAllSubarrays(arr) {
    for (var sp = 0; sp < arr.length; sp++) {
        for (var ep = sp; ep < arr.length; ep++) {
            var res = [];
            for (var i = sp; i <= ep; i++)
                res.push(arr[i]);
            console.log(res);
        }
    }
}
var arr = [5, 1, 2, 6, 2, 8];
printAllSubarrays(arr);
