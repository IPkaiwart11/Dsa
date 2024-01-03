var s = "";
var n = 7;
for (var i = 1; i <= n; i++) {
    //        console.log(i);
    for (var j = 1; j <= n - i; j++) {
        s += " ";
    }
    for (var j = 1; j <= n + i; j++) {
        s += "";
    }
    s += "*";
    s += "\n";
}
console.log(s);
