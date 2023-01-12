// function solution(n, m) {
//     // 최대공약수
//     let gcd = (n, m) => (n % m === 0 ? m : gcd (m, n % m));
//     // 최소공배수
//     let lcm = (n, m) => (n * m) / gcd (n, m);
//     // 결과 출력
//     return [gcd(n, m), lcm(n, m)];
// }

function solution(n, m) {
  return [gcd(n, m), lcm(n, m.gcd(n, m))];
}

function lcm(a, b, gcd) {
  return (a * b) / gcd;
}

function gcd(a, b) {
  let num = 0;
  while (b !== 0) {
    num = a % b;
    a = b;
    b = num;
  }
  return a;
}
