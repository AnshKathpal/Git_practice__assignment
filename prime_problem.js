let num = 13;
Let count = 0;
for(x=1; x<=num ;x++){
if(num%x==0){
count++;
}
}
if(count==0){
console.log("Prime number");
}else {
console.log("Not a prime number");
}