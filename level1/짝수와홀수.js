// 짝수인 경우 "Even", 홀수인 경우 "Odd"

function solution(num) {
  if (num % 2 === 0) {
    return "Even"
  } else {
    return "Odd"
  }
}

console.log(solution(7))
console.log(solution(10))