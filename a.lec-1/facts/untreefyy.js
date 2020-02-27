const fs=require('fs');
const path=require('path');

let fileObject={

    folderName:'',
    children:[]
}
async function list(src){
    let a=fs.lstatSync(src).isDirectory();
    if(!a){
        const file=path.basename(src);
        fileObject.children.push(file);
    }
    else{
        const f=fs.readdirSync(src);
        const foldername=path.basename(src);
        for(let i=0;i<f.length;i++){
            fileObject.children.push(f[i]);
        }
        fileObject.folderName=foldername;
     for(let i=0;i<f.length;i++){
         list(src+'\\'+f[i]);
     }
    }
    // console.log(fileObject);
}
async function f1(){
    const ans=await list("G:\\web-101\\LEC2\\SRC");
    console.log(fileObject);
}
f1();