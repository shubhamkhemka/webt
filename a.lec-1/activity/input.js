let help=require("../activity/commands/help");
let view=require("../activity/commands/view");
let treefy=require("../activity/commands/treefy");
let untreefy=require("../activity/commands/untreefy");
let monitor=require("../activity/commands/monitor");
let input=process.argv[2];

let p=console.log;

if(input=='help'){
help.help();
}
else if(input=='view'){
    view.view();
    
}
else if(input=='treefy'){
    treefy.treefy();
}
else if(input=='untreefy'){
   untreefy.untreefy();
}
else if(input=='monitor'){
    monitor.monitor();
}
else {
    
}3 n
