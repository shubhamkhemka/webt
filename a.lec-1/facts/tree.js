const fs=require('fs');
const path=require('path');
let uniqid=require('uniqid');
// let fileObject={

//     folderName:'',
//     children:[]
// }
// async function list(src){
//     let a=fs.lstatSync(src).isDirectory();
//     if(!a){
//         const file=path.basename(src);
//         fileObject.children.push(file);
//     }
//     else{
//         const f=fs.readdirSync(src);
//         const foldername=path.basename(src);
//         for(let i=0;i<f.length;i++){
//             fileObject.children.push(f[i]);
//         }
//         fileObject.folderName=foldername;
//      for(let i=0;i<f.length;i++){
//          list(src+'\\'+f[i]);
//      }
//     }
//     // console.log(fileObject);
// }
// async function f1(){
//     const ans=await list("G:\\web-101\\LEC2\\SRC\\D1");
//     console.log(fileObject);
// }
// f1();


function list(src,dest){
let a=fs.lstatSync(src).isDirectory();

if(!a){
    // fs.createReadStream(src).pipe(fs.createWriteStream(dest));
    let uniqname =uniqid();

    fs.copyFileSync(src,path.join(dest,uniqname));

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