function solution(arr) {
    let unpairedValue = 0;
    if(arr.length > 0 && arr.length % 2 != 0) {
        arr.map((curVal, _, arr) => {
            if(arr.indexOf(curVal) == arr.lastIndexOf(curVal)) {
                unpairedValue = curVal;
            }
        });
        return unpairedValue;
    }
    return null;
}
