const fs=require('fs');
const path=require('path');
module.exports.view=function(){
    console.log("i am view");
    let src=arguments[0];
    let mode=arguments[1];
    if(mode=="-t"){
        viewAstree(" ",src);
    }
    else if(mode=="-f"){
        viewAsFlat(src);
    }
    else{
        console.log("wrong")
    }
}
function  viewAstree(indent,src){
    let a=fs.lstatSync(src).isDirectory();
    if(!a){
        console.log(indent+path.basename(src)+"*");
        
    }
    else{
        const f=fs.readdirSync(src);
     console.log(indent +path.basename(src));
    
     for(let i=0;i<f.length;i++){
         viewAstree(indent+"  |-",src+'\\'+f[i]);
     }
    }
    
    
}

function  viewAsFlat(src){
        let a=fs.lstatSync(src).isDirectory();
        if(!a){
            console.log(src+"*");
            
        }
        else{
            const f=fs.readdirSync(src);
         console.log(src);
         
         for(let i=0;i<f.length;i++){
             viewAsFlat(src+'\\'+f[i]);
         }
        }
    }
    