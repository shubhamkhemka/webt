const fs=require('fs');
const path=require('path');
let uniqid=require('uniqid');

module.exports.untreefy=function(){
    console.log("file copied");
    let src=arguments[0];
    let dest=arguments[1];
  
  let root={};
  untreefy(src,dest,root);
  console.log(root);
module.exports=root;
let data = JSON.stringify(root);

fs.writeFile(dest+"\\"+"matadata.json", data, (err) => 
{
    if (err) throw err;
    console.log('Data written to file');
});

}
function untreefy(src,dest,node){

    let a=fs.lstatSync(src).isDirectory();
    if(!a){
      let uniqname=uniqid();
      node.isfile=true;
      node.children=[];
      node.filename=path.basename(src);
      node.newname=path.basename(src)+uniqname;
      fs.copyFileSync(src,path.join(dest,uniqname));
      

    }
    else{
       
        const f=fs.readdirSync(src);
      node.isfile=false;
      node.filename=path.basename(src);
      node.children=[];

      for(let i=0;i<f.length;i++){
          let childeObj={};
          let childPath=path.join(src,f[i]);
          untreefy(childPath,dest,childeObj);
          node.children.push(childeObj);

      }
     

    }


}


