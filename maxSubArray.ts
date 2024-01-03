let arr = [2,3,4,-7,-9,2,3,-5,10,7,1];

function maxSubArray(arr: number[]): number{
      let train : number = 0;
      let maxi : number = 0;
      for(let i=0; i<arr.length; i++){
      let newtrain = arr[i];
      let sittrainWithPre = newtrain + arr[i];
      train = Math.max(newtrain,sittrainWithPre);
      maxi = Math.max(maxi,train);
}
return maxi;
}
console.log(maxSubArray(arr));
