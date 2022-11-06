function solution(array) {
    let newArr = array.sort((a, b) => (a-b));
    let answer = newArr[Math.floor(newArr.length/2)];
    return answer;
}