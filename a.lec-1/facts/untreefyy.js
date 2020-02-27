const fs=require('fs');
const path=require('path');
let uniqid=require('uniqid');
const root=require('../facts/treefy');
// console.log(root);
function treefy(src,dest,root){
    if(!root.isfile){
        fs.mkdirSync(path.join(dest,root.filename));
    }
    else{
      fs.copyFileSync(src,path.join(dest,root.newname));
    }
    for(let i=0;i<root.children.length;i++){
        treefy(path.join(src,root.children[i].filename),path.join(dest,root.filename),root.children[i]);
    }

  
  }
  
treefy("G:\\web-101\\LEC2\\SRC\\D1","G:\\web-101\\a.lec-1\\facts\\copy",root);