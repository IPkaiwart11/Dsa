let arr = [
            [11,12,13,14],
            [22,23,24,15],
            [21,26,25,16],
            [20,19,18,17]   
];

var printing = "";

function spiralOrder(arr: number[][]): void{
   let n = arr.length;
   let m = arr[0].length;
   let total = n*m;
   let res = [];
   
   let tw = 0;
   let bw = n-1;
   let lw = 0;
   let rw =m-1;

/////////////printing top wall///////////
while(total > 0){
for( let j=lw; j<=rw && total>0; j++){
     res.push(arr[tw][j]);
     total--;
}    
tw++;
///////////printing right wall//////////
for(let i=tw; i<=bw && total>0; i++){
  res.push(arr[i][rw]);
     total--;          
}
rw--;
//////////printing bottom wall/////////////
for( let j=rw; j>=lw && total>0; j--){
 res.push(arr[bw][j]);
               total--;
          }    
 bw--;
//////////printing left wall ///////////
for( let i=bw; i>=tw && total>0; i--){
res.push(arr[i][lw]);
               total--;
  }    
 lw++;
}
console.log(res);
}
spiralOrder(arr);

