const fs=require('fs');
const path=require('path');
let uniqid=require('uniqid');


function list(src,dest){
let a=fs.lstatSync(src).isDirectory();

if(!a){
    // fs.createReadStream(src).pipe(fs.createWriteStream(dest));
    let uniqname =uniqid();
    let f=path.basename(src);

    fs.copyFileSync(src,path.join(dest,f+uniqname));

    // console.log(indent+path.basename(src)+"*");
    
}
else{
    const f=fs.readdirSync(src);
//  console.log(indent +path.basename(src));
// arr.push(src);
 for(let i=0;i<f.length;i++){
     list(src+'\\'+f[i],dest);
 }
}
}
list('G:\\web-101\\LEC2\\SRC\\D1','G:\\web-101\\a.lec-1\\facts\\copy')