function solution(hp) {
    const one = Math.floor(hp / 5);
    const two = Math.floor((hp - one * 5) / 3);
    const three = hp - one * 5 - two * 3;
    return one + two + three;
}