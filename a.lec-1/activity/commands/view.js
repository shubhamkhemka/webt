const fs=require('fs');
module.exports.view=function(){
    console.log("i am view");
    let src=arguments[0];
    let mode=arguments[1];
    if(mode=="-t"){
        viewAstree(src);
    }
    else if(mode=="-f"){
        viewAsFlat(src);
    }
    else{
        console.log("wrong")
    }
}
function  viewAstree(src){
    console.log(" viewAstree");
    if(fs.readdirSync(scr).length==0){
        return;
    }
    
}

function  viewAsFlat(src){
    console.log(" viewAsFlat");
}