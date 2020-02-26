function rec(start,end){
    if(start>end){
        return end;

    }
    console.log(start);
rec(start+1,end);
}
rec(0,5);