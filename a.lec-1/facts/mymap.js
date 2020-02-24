let arr2=[1,2,3,4,5,4,9,15,17];
let arr1=[];
let arr3=[];

function mymap(arr){
      arr.forEach(element => {
        arr1.push(element*element);});

        return arr1;
}
arr1=mymap(arr2);
console.log(arr1);
function myfilter(arr){
    arr.forEach(element=>{
      for(let i=2;i*i<=element;i++){
          if(element%i==0){
              return;
          }
      }
      arr3.push(element);
    });
    return arr3;
}
arr3=myfilter(arr2);
console.log(arr3);
