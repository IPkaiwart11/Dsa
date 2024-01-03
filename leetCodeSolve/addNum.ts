// function twoSum(nums: number[], target: number): number[] {

// };

let nums = [2,3,8,4];
let target = 10;

for(let i=0; i<=nums.length; i++){
    for(let j=i+1; j<=nums.length; j++){
              
              let sums = nums[i] + nums[j];
              if( sums == target){
              console.log([i,j]);
               
}   

    }
      
}

