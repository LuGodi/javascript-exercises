const sumAll = function(a,b) {
    let sum = 0;
    let firstNum=a;
    let secondNum=b;
    if (!Number.isInteger(a)||!Number.isInteger(b)||a<0||b<0)
    {
        return "ERROR"
    }
    if(a>b) [firstNum,secondNum] = [b,a]
    for (let i = firstNum; i<=secondNum; i++)
    {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
