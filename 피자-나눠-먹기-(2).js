function solution(n) {
    let pizza_piece = 6;
//     i는 피자조각 총 개수
    for (let i = 1; i <= n * 6; i++) {
        if ((i % 6 === 0)&&(i % n === 0)) {
            return parseInt(i / 6);
        }
    }
}

// function solution(n) {
//     let pizza = 1;
//     while ((pizza * 6) % n) {
//         pizza++;
//     }
//     return pizza;
// }