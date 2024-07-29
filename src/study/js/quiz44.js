//(44) What's the output?
function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);

/**
 * A) [0,10] and [10,20]
 *  B) 20 and 20
 * C) 10 and 20
 * D) 0,10 and 10,20 
 */

/**
 * 제너레이터 함수가 yield키워드를 만나면 다음거 안하고 바로 값을 산출한닫는 것까지 확안
 * 
 */