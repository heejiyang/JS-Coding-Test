const answer = num => (num === 0 ? 1 : num * answer(num - 1));
function solution(balls, share) {
    return Math.round(
        answer(balls) / answer(balls - share) / answer(share)
    );
}