class TreeNode{
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

     constructor(v:number){
       this.val =v;
       this.left = null;
       this.right = null;        
     }
}
let idx = 0;
function treeConstructor(arr:number[] : TreeNode | null){
        if(arr[idx] == -1){
           idx++;
           return null;    
        }       
        let nn = new TreeNode(arr[idx]);
        idx++;
        let leftChild =treeConstructor(arr);
        let rightChild = treeConstructor(arr);
        nn.left = leftChild;
        nn.right = rightChild;
        return  nn;
}

let preOrder : number[]=[];
let inOrder : number[]=[];
let postOrder : number[]=[];

function dfs(node: TreeNode | null) : void{
               if(node == null) return;

               preOrder.push(node.val);

               dfs(node.left);

               inOrder.push(node.val);

               dfs(node.right);

               postOrder.push(node.val);
}
dfs(root);

console.log