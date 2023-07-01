const repeatString = function(string,number) {
    a=string;
    if(number>0){
    for (let i=0;i<number-1;i++){
    a+=string;
        ;}
        return a;
    } else if (number==''){
        return '';
    }else {
        return 'ERROR';
    }

}

// Do not edit below this line
module.exports = repeatString;
