function toggleCase(s:string): string{
        let ans = "";
        for(let i = 0; i<s.length; i++){
             let ascii = s.charCodeAt(i);
             if(ascii < 97){
               ascii += 32;
             }  else{
               ascii -= 32;
             }
             ans += String.fromCharCode(ascii);
        }       
        return ans;
}
let s = "AbHjGHJnjfd";
console.log(toggleCase(s));