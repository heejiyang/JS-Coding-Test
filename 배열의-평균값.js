function solution(numbers) {
    var answer = 0;
    for (i of numbers){
        answer += i
    }
    return answer / numbers.length;
}

// 파이썬
// def solution(numbers):
//     return sum(numbers) / len(numbers)

// import numpy as np

// def solution(numbers):
//     return np.sum(numbers) / len(numbers)