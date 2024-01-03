let arr = [
           [11,12,13,14],
           [15,16,17,18],
           [19,20,21,22],
           [23,24,25,26]    
]
let snak = "";
function snake(arr: number[][]): any{
           for(let i=arr.length-1; i>=0; i--){
              
               if(i%2 == 0){
                for(let j=arr.length-1; j>=0; j--){
                         
                  snak += arr[i][j];
                    }
               }else{
                              for(let j=0; j<arr.length; j++){       
                  snak += arr[i][j];
                   }
               }
               snak += "\n"

           }    
}
snake(arr);
console.log(snak);