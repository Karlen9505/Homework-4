// 1.) Create a function that builds a tree like object given an array with object which
// contains parent and id properties.
//
let treeNodes = [
    {parent:null , id:0},
    {parent:0 , id:1},
    {parent:0 , id:2},
    {parent:1 , id:3},
    {parent:1 , id:4},
    {parent:2 , id:5},
    {parent:4 , id:6},
    {parent:3 , id:7},
    {parent:4 , id:8},
    {parent:4 , id:9},
    {parent:4 , id:10},
];
function  buildTree(arr, c = 0) {
    let tree = {};
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i]["parent"] !== null) {
            tree[arr[i]["parent"]] = {};
        };
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]["parent"] !== null) {
            tree[arr[i]["parent"]][arr[i]["id"]] = {};

        }
    }
    return tree
}


// es gitem vor sxala mihat recursion-ov kgrem shabatva yntacqum.


console.log(buildTree(treeNodes));

//3.)Write a recursive function to determine whether all digits of the number are odd or
// not.

    function checkOdd(num, i=0){
    let arr = (num += '').split('');
    if(!(arr[i] % 2)){
        return false
    } else {
        arr.shift();
        if((arr.length === 0)){
            return true
        };
        num = +(arr.join(''));
        return checkOdd(num,i)
    }

}

console.log(checkOdd(1112));





//4.)Given an array of numbers. Write a recursive function to find its minimal positive element. (if
// such element does not exist, return -1)․

function minPositive(arr,i = 0){
    let shifted = [];
    if(arr.length === 0){
        return -1;
    }
    shifted.push(arr.shift());
    if(shifted[i] < 0){
        return minPositive(arr,i = 0)
    };
    if(shifted[i] < arr[i]){
        arr.shift();
        arr =  shifted.concat(arr);
        return minPositive(arr,i);
    };
    if(shifted[i] >= arr[i]){
        if(arr[i] < 0){
            arr.shift();
            arr = shifted.concat(arr)
        }
        return minPositive(arr,i)
    };
    if(arr.length === 0){
        let lastDigit = shifted.pop()
        return lastDigit
    }
}
console.log(minPositive([-51,-46]));







