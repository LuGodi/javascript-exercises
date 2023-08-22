const fibonacci = function(iterations) {
//posso fazer com reduce ou simplesmente uma variavel pra dar tracking
if (iterations < 0) return "OOPS"
let nextNum
const firstNums = [1,1]
//repopular o array com a soma
for (let i = 1; i<=iterations; i++)
{
  nextNum = firstNums[i-1] + firstNums[i]    
  firstNums.push(nextNum)  
}
return firstNums[iterations-1]
//sum with anterior

};

// Do not edit below this line
module.exports = fibonacci;
