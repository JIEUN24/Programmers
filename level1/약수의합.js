// 정수 n의 약수를 모두 더한 값

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i
    }
  }
  return answer
}

console.log(solution(12))