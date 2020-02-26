let root={
    data:10,
    children:[{
        data:20,
        children:[{
            data:50,
            children:[]
        },{
            data:60,
            children:[]
        }]
    },{
        data:30,
        children:[
            {
                data:70,
                children:[]
            },
            {
                data:80,
                children:[]
            }
        ]
    },{
        data:40,
        children:[]
    }]
}
function displayTree(root){
    if(root==null)
        return;
    }
    let check=root.data+"=>";
    for(let i=0;i<root.children.length;i++){
        if(i==root.children.length-1){
            check+=root.children[i].data;
        }
        else
        check+=root.children[i].data+",";
    }
    console.log(check);
    for(let i=0;i<root.children.length;i++){
        displayTree(root.children[i]);
    }
}
displayTree(root);