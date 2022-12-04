let num = 13;
Let count = 0;
for(let x=1; x<=num; x++){
if(num%x==0){

count++;
  }
}

if(count==2)
{
console.log("Prime number");
}

else
{
console.log("Not a prime number");
}