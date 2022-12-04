// palindrome_problem

let str = "madam";

let bag = "";

for(x=str.length-1;x>=0;x--){
    bag+=str[x];
}

if(bag == str){
console.log("palindrome");

}
  else
{
console.log("not palindrome);
}