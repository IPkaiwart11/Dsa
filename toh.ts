function toh(s,d,h,n){
      if(n == 0) return;
      toh(s,h,d,n-1);
      console.log("Move disc"+ n +" From "+ s+ " to " + d);
      toh(h,d,s,n-1);
//       console.log("Move disc"+ n +" From "+ s+ " to " + d);         
}
console.log(toh("a","b","c",4));