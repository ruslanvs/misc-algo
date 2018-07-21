// Maximum difference between two elements such that larger element appears after the smaller number

let arr = [2, 3, 10, 6, 1, 40, 8, 1]

function findMaxDifference(arr) {
    let maxDiff = arr[1] - arr[0];
    let minElement = arr[0];
    for(let i = 1; i < arr.length; i++) {
        let diff = arr[i] - minElement;
        if(arr[i] < minElement) minElement = arr[i];
        if(diff > maxDiff) maxDiff = diff;
    }
    console.log(maxDiff);
    return maxDiff;
}

findMaxDifference(arr);