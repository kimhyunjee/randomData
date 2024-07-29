//What's the output?
const person = { name: "Lydia" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));

/**
 * A) undefined and Lydia is 21
 * B) function and function
 * C) Lydia is 21 and Lydia is 21  // select
 * D) Lydia is 21 and function
 */

// 둘 다 사용하면 이 키워드가 참조할 객체를 전달할 수 있습니다.
// 그러나 .call도 즉시 실행됩니다! .bind. 함수의 복사본을 반환하지만 컨텍스트가 바인딩되어 있습니다! 즉시 실행되지 않습니다.
// ? call과 bind모두 this를 명시적으로 바인딩하는 것 아닌가..? 둘이 같은 걸 가리키는 게 아닌가??