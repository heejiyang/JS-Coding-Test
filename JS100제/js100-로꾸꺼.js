const i = prompt('입력');
const reverseStr = i.split('').reverse('').join('');
console.log(reverseStr);

let 입력 = '거꾸로';
let 출력 = '';
for (let i = 입력.length-1; i >= 0; i--) {
        출력 += 입력[i];
}
console.log(`출력 : ${출력}`);


// let 입력 = prompt("입력");
// let 출력 = '';
//         for(let i=0; i < 입력.length; i++){
//             출력 = 입력[i] + 출력;
//         }
// console.log(출력);