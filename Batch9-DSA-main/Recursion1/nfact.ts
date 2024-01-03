function factorial(n: number): number {
    //base case
    console.log(n);
    if(n == 1) return 1;
    console.log(n);
    //calc my ans, n = n * (n-1)!
    let nm1f = factorial(n-1);
    
    return n * nm1f;
}

console.log(factorial(5));