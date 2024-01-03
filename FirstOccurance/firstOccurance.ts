function FisrtOccurance(arr:number[], target:number):number {
               var l = 0;
               var r = arr.length - 1;
               let pot = -1;
               while (l <= r) {
                   var mid = Math.floor((l + r) / 2);
                   if (arr[mid] == target) {
                       pot = mid;
                       r = mid - 1;
                   }
                   else if (arr[mid] < target) {
                             pot =arr[mid];
                              l = mid + 1;
                   }
                   else {
                       r = mid - 1;
                   }
                   
               }
               return pot;
           }
           var arr = [2,2,3,3,3,3,4,4,4,5,5,5];
           var idx = FisrtOccurance(arr, 5);
           console.log(idx);