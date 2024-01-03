var arr = [
    [11, 12, 13, 14],
    [22, 23, 24, 15],
    [21, 26, 25, 16],
    [20, 19, 18, 17]
];
var printing = "";
function spiralOrder(arr) {
    var n = arr.length;
    var m = arr[0].length;
    var total = n * m;
    var res = [];
    var tw = 0;
    var bw = n - 1;
    var lw = 0;
    var rw = m - 1;
    /////////////printing top wall///////////
    while (total > 0) {
        for (var j = lw; j <= rw && total > 0; j++) {
            res.push(arr[tw][j]);
            total--;
        }
        tw++;
        ///////////printing right wall//////////
        for (var i = tw; i <= bw && total > 0; i++) {
            res.push(arr[i][rw]);
            total--;
        }
        rw--;
        //////////printing bottom wall/////////////
        for (var j = rw; j >= lw && total > 0; j--) {
            res.push(arr[bw][j]);
            total--;
        }
        bw--;
        //////////printing left wall ///////////
        for (var i = bw; i >= tw && total > 0; i--) {
            res.push(arr[i][lw]);
            total--;
        }
        lw++;
    }
    console.log(res);
}
spiralOrder(arr);
