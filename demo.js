let  arr=[,1,2,3,4,1,2,3,4,7,5]
let n=[];
function duplicate(arr){
    for(let i=0;i<arr.length;i++){
        if(n.indexOf(arr[i]) === -1){
            n.push(arr[i]);
        }
    }  return n;
}
console.log(duplicate(arr));
