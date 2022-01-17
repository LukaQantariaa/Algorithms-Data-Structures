// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let newArray = [];
    for(let i=0; i<array.length; i=i+size) {
        newArray.push(array.slice(i,  size + i ))
    }
    return newArray
}

module.exports = chunk;

// Solution 2
// function chunk(array, size) {
//     let chunked = [];
//     for(let num of array) {
//         if(chunked.length === 0) chunked.push([])
//         chunked[chunked.length-1].length === size ? chunked.push([num]) : chunked[chunked.length-1].push(num)
//     }
//     return chunked;
// }
