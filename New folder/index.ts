// let n = 5;
// let string = "";
// // Upside pyramid
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = n; j > i; j--) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// // downside pyramid
// for (let i = 1; i <= n - 1; i++) {
//   // printing spaces
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = (n - i) * 2 - 1; k > 0; k--) {
//     string += "*";
//   }
//   string += "\n";f
// }
// console.log(string);

let s = "";
let n = 5;
// upper pyramid
for(let i=1; i<=n; i++){
  //  printing space
  for(let j=1; j<=n-i; j++){
      s += " ";
  }
  // printing star
  for(let k=1; k<=2*i-1; k++){
    s += "*";
  }
  s +="\n";
}
// *******
//  *****
//   ***
//    *
// downward pyramid
for(let i=1;i<=n-1; i++){
  //  printing space
  for(let j=1;j<=i; j++){
    s += " ";
  }
  for(let k=1; k<=2*(n-i)-1; k++){
    s += "*";
  }
  s+="\n";
}
console.log(s);