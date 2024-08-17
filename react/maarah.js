let arr = [1, 2, 3, 4, 5, 3, 0, 0, 0, 0]

// NAME THE FUNCTION BETTER: removeDuplicates
function maarah(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== arr[i + 1]) {
            newArr.push(arr[i])
        }
    }
    
    // NO CONSOLE.LOGS PLEASE
    console.log(newArr);
    return newArr
}
maarah(arr)