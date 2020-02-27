const fs=require('fs');
const path=require('path');
let uniqid=require('uniqid');

module.exports.untreefy=function(){
    console.log("file copied");
    let src=arguments[0];
    let dest=arguments[1];
  untreefy(src,dest);

}

function untreefy(src,dest){



let a=fs.lstatSync(src).isDirectory();

if(!a){
   
    let uniqname =uniqid();
    let f=path.basename(src);

    fs.copyFileSync(src,path.join(dest,f+uniqname));

 
    
}
else{
    const f=fs.readdirSync(src);

 for(let i=0;i<f.length;i++){
     untreefy(src+'\\'+f[i],dest);
 }
}
}

