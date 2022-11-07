function solution(array) {
    let newArr = array.sort((a, b) => (a-b));
    let answer = newArr[Math.floor(newArr.length/2)];
    return answer;
}

// function solution(array) {
//     return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
// }