const removeFromArray = function(arr,...nbr) {
    const newArray=[];
    let size=arr.length;
    for (let i=0;i<size;i++){
        if (!nbr.includes(arr[i])){
            newArray.push(arr[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
