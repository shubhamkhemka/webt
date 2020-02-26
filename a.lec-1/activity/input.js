let help=require("../activity/commands/help");
let view=require("../activity/commands/view");
let treefy=require("../activity/commands/treefy");
let untreefy=require("../activity/commands/untreefy");
let monitor=require("../activity/commands/monitor");
let input=process.argv[2];

let p=console.log;

if(input=='help'){
help.help(process.argv[3],process.argv[4]);
}
else if(input=='view'){
    view.view(process.argv[3],process.argv[4]);
    
}
else if(input=='treefy'){
    treefy.treefy(process.argv[3],process.argv[4]);
}
else if(input=='untreefy'){
   untreefy.untreefy(process.argv[3],process.argv[4]);
}
else if(input=='monitor'){
    monitor.monitor(process.argv[3],process.argv[4]);
}
else {
    
}
