let arr = [
               [11,12,13,14],
               [15,16,17,18],
               [19,20,21,22],
               [23,24,25,26]
    ];
//////////////transform arr/////////////////////////////
    function twoDimensionalArray(arr: number[][]): void{
              
               for(let i=0; i<arr.length; i++){
                      for(let j=i; j<arr[0].length; j++){
                      let temp  = arr[i][j];
                      arr[i][j] = arr[j][i];
                      arr[j][i] = temp;
                  }   
           } 
       }
       twoDimensionalArray(arr);
       ///////////////reverse arr//////////////
function reverse(arr: number[]) :any{
let l = 0;
let r = arr.length-1;
while(l<r){
               let temp = arr[l];
               arr[l] = arr[r];
               arr[r] = temp;
               l++;
               r--;
           }
}
     for(let i=0; i<arr.length; i++){
               reverse(arr[i]) ;    
     };
     console.log(arr);





