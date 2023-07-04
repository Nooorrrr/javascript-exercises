const sumAll = function(n1,n2) {
    if (typeof(n1)!="number"||typeof(n2)!="number"){
        return "ERROR";
    }else if(n1<0 || n2<0){
        return "ERROR"}

    else if(n2<n1){
        a=n2;
        n2=n1;
        n1=a;

    }
    let sum=n1;
    for (let i=n1+1;i<=n2;i++){
        sum+=i;
    }
    return sum;}



// Do not edit below this line
module.exports = sumAll;
