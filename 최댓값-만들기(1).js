function solution(numbers) {
    let answer = 0;
    numbers.sort((a, b) => b - a);
    answer = numbers[0] * numbers[1];
    return answer;
}

// function solution(numbers) {
//     let 정렬된값 = numbers.sort((a, b)=> a - b).reverse()
//     return 정렬된값[0] * 정렬된값[1];
// }