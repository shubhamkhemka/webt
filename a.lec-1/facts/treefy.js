const fs=require('fs');
const path=require('path');
let uniqid=require('uniqid');

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
let root={};
let dest1="G:\\web-101\\a.lec-1\\facts\\copy";
untreefy("G:\\web-101\\LEC2\\SRC\\D1","G:\\web-101\\a.lec-1\\facts\\copy",root);
console.log(root);
module.exports=root;
let data = JSON.stringify(root);

fs.writeFile("G:\\web-101\\a.lec-1\\facts\\copy\\"+"matadata.json", data, (err) => 
{
    if (err) throw err;
    console.log('Data written to file');
});

