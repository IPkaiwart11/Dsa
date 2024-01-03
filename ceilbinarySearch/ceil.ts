function ceil(arr:number[], target:number):number {
               var l = 0;
               var r = arr.length - 1;
               let ceil = -1;
               while (l <= r) {
                   var mid = Math.floor((l + r) / 2);
                   if (arr[mid] == target) {
                       return target;
                   }
                   else if (arr[mid] > target) {
                             ceil =arr[mid];
                              r = mid - 1;
                   }
                   else {
                       l = mid + 1;
                   }
                   
               }
               return ceil;
           }
           var arr = [2, 12, 14, 23, 25, 34, 45, 56, 67, 78, 89, 90, 109];
           var idx = ceil(arr, 40);
           console.log(idx);