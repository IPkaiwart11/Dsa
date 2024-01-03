function toggleCase(s) {
    var ans = "";
    for (var i = 0; i < s.length; i++) {
        var ascii = s.charCodeAt(i);
        if (ascii < 97) {
            ascii += 32;
        }
        else {
            ascii -= 32;
        }
        ans += String.fromCharCode(ascii);
    }
    return ans;
}
var s = "AbHjGHJnjfd";
console.log(toggleCase(s));
