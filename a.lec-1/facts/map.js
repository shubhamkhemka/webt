const arr=[2,4,5,2,4,7,9,5,1,10];
const arr1=arr.map((curr)=>{
    if(curr%2==0){
        return curr+1;
    }
    else{
        return curr-1;
    }
});
console.log(arr1);

const arr2=arr1.filter((curr)=>{
    for(let i=2;i*i<=curr;i++){
        if(curr%i==0){
            return;
        }
       
    }
    return curr;
})
console.log(arr2);