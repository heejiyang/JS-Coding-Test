// function solution(s){
//     let pCount = s.split(/p/i).length-1;
//     let yCount = s.split(/y/i).length-1;
//     return pCount === yCount;
// }

function solution(s){
  return s.match(/p/ig)?.length === s.match(/y/ig)?.length
  // console.log(s.match(/p/ig)?.length);
};