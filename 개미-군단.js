function solution(hp) {
    const one = Math.floor(hp / 5);
    const two = Math.floor((hp - one * 5) / 3);
    const three = hp - one * 5 - two * 3;
    return one + two + three;
}

// function solution(hp) {
//     return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
// }