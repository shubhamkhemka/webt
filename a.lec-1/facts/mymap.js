// let arr2=[1,2,3,4,5,4,9,15,17];
// let arr1=[];
// let arr3=[];

// function mymap(arr){
//       tj.forEach(element => {
//         arr1.push(element*element);});

//         return arr1;
// }
// arr1=mymap(arr2);
// console.log(arr1);
// function myfilter(arr){
//     arr.forEach(element=>{
//       for(let i=2;i*i<=element;i++){
//           if(element%i==0){
//               return;
//           }
//       }
//       arr3.push(element);
//     });
//     return arr3;
// }
// arr3=myfilter(arr2);
// console.log(arr3);
let arr=[];
let arr1=[2,3,4,6,8];


Array.prototype.mymap=function(map1){
  let arr2=[];
      
  for(let i=0;i<this.length;i++){
     arr2.push(map1(this[i]));
   }
 return arr2;
}
function map1(x){
  return x*x;
}
console.log(arr1.mymap(map1));

Array.prototype.myfilter=function(filter1){
let arr2=[];
for(let i=0;i<this.length;i++){
  let a=(filter1(this[i]));
  if(a!=undefined){
    arr2.push(a);
  }
}
return arr2;
  
}

function filter1(x){
  if(x%2==0){
    return x;
  }
 
}
console.log(arr1.myfilter(filter1));