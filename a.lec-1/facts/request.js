// import { exec } from "child_process";
const {exec}=require("child_process");
function takerequest(data,success,faliure){
    if(data%2==0){
        success();
    }
    else{
        faliure();
    }
}



//client

function success(){
    console.log("your request completed");
    exec("calc");
}
function faliure(){
    console.log("faliure");
    exec("start chrome www.facebook.com");

}
takerequest(17,success,faliure);
// takerequest(18,success,faliure);