module.exports = function main(str) {
  // Write your code here
    var arr=str.split('');
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
};
