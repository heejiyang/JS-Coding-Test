function solution(emergency) {
    let list = emergency.slice().sort((a, c) => c - a);
    return emergency.map(el => list.indexOf(el) + 1);
}