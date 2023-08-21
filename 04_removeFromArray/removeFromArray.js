const removeFromArray = function(arr, ...words) {
    
    return arr.filter((element)=> !words.includes(element) 
    )

};

// Do not edit below this line
module.exports = removeFromArray;
