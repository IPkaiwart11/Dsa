var star = "";
var n = 5;
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
        if (i == 1 || j == 3 || i == 5) {
            star += "*";
        }
        else {
            star += " ";
        }
    }
    star += "\n";
}
// console.log(star);
star += "\n";
///////////for N ////////////////////////////////////////
// let star = "";
// let n = 5;
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
        if (j == 1 || j == n || i == j) {
            star += "*";
        }
        else {
            star += " ";
        }
    }
    star += "\n";
}
// console.log(star);
star += "\n";
///////////for D ////////////////////////////////////////
// let star = "";
// let n = 5;
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
        if (j == 1 || (i == 1 && (j == 2 || j == 3)) || (j == n && (i == 2 || i == 3 || i == 4)) || (i == n && (j == 2 || j == 3))) {
            star += "*";
        }
        else {
            star += " ";
        }
    }
    star += "\n";
}
// console.log(star);
star += "\n";
///////////for R ////////////////////////////////////////
// let star = "";
// let n = 5;
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
        if (j == 1 || (i == 1 && (j == 2 || j == 3)) || (j == n && i == 2) || (i == 3 && (j == 1 || j == 2 || j == 3)) || (i == 4 && j == 3) || (i == n && j == n)) {
            star += "*";
        }
        else {
            star += " ";
        }
    }
    star += "\n";
}
// console.log(star);
star += "\n";
///////////for A ////////////////////////////////////////
// let star = "";
// let n = 5;
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
        if (j == 1 || j == n || i == 1 || i == 3) {
            star += "*";
        }
        else {
            star += " ";
        }
    }
    star += "\n";
}
// console.log(star);
star += "\n";
///////////for P ////////////////////////////////////////
// let star = "";
// let n = 5;
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
        if (j == 1 || i == 1 || i == 3 || (j == n && i == 2)) {
            star += "*";
        }
        else {
            star += " ";
        }
    }
    star += "\n";
}
// console.log(star);
star += "\n";
///////////for A ////////////////////////////////////////
// let star = "";
// let n = 5;
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
        if (j == 1 || j == n || i == 1 || i == 3) {
            star += "*";
        }
        else {
            star += " ";
        }
    }
    star += "\n";
}
// console.log(star);
star += "\n";
///////////for L ////////////////////////////////////////
// let star = "";
// let n = 5;
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
        if (i == n || j == 1) {
            star += "*";
        }
        else {
            star += " ";
        }
    }
    star += "\n";
}
console.log(star);
