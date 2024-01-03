function binarySearch(arr:number[], target:number):number{
               let l = 0;
               let r = arr.length-1;
               while(l<=r){
                   let mid = Math.floor((l+r)/2);
                   if(arr[mid] == target){
                        return mid;      
                   }else if(arr[mid] < target){
                        l = mid + 1;      
                   }else{
                        r = mid - 1;      
                   }
                   return -1;           
               }
}
let arr =[2,12,14,23,25,34,45,56,67,78,89,90,109];
let idx = binarySearch(arr,40);
console.log(idx);