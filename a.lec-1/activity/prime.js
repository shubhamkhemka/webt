let number =17;
for(let div=2;div*div<=number;div++){
    if(number%div==0){
        console.log("not prime");
        return;
    }
}
console.log(number +" is prime");