const fs=require('fs');
const path=require('path');
let uniqid=require('uniqid');
// const root=require('../commands/untreefy');
module.exports.treefy=function(){
    console.log("tree completed");
    let src=arguments[0];
  
    let dest=arguments[1];
    
    let node=require(path.join(dest,"matadata.json"));
    
    treefyIt(src,dest,node);
}

// console.log(root);
function treefyIt(src,dest,node){
   
    if((node.isfile)==false){
        fs.mkdirSync(path.join(dest,node.filename));
    }
    else{
      fs.copyFileSync(src,path.join(dest,node.newname));
    }
    for(let i=0;i<node.children.length;i++){
        treefyIt(path.join(src,node.children[i].filename),path.join(dest,node.filename),node.children[i]);
    }

  
  }
  
