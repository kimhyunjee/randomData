// (29) What's the output?
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

/**
 * A) 123
 * B) 456
 * C) undefined
 * D) ReferenceError
 */

/**
 * 객체 키는 자동으로 문자열로 변환됩니다. 값이 123인 객체 a를 객체 키로 설정하려고 합니다.
 *  그러나 객체를 문자열화하면 "[객체 Object]"가 됩니다.
 * 따라서 여기서 말하는 것은 a["[object Object]"] = 123입니다.
 * 그런 다음 같은 작업을 다시 시도해 볼 수 있습니다. c는 암시적으로 문자열화하는 또 다른 객체입니다.
 * 따라서 a[""[object Object]"] = 456이 됩니다.
 * 그런 다음 실제로는 a[""[object Object]"]인 a[b]를 기록합니다. 방금 456으로 설정했으므로 456이 반환됩니다.
 */



