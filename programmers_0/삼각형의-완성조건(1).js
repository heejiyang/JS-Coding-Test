function solution(sides) {
    let answer = 0;
    const max = Math.max(...sides);
    const add = sides.reduce((a, c) => a + c) - max;
    answer = max < add ? 1 : 2;
    return answer;
}