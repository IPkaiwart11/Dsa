let s : string = "";
let n : number = 7;
for(let i=1; i<=n; i++){
//        console.log(i);
    for(let j=1; j<=n-i; j++){
               s+= " ";
    }
    for(let j=1; j<=n+i; j++){
               s+= "";
    }
    s+= "*";
    s+= "\n";
}
console.log(s);