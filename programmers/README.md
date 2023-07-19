# ES6 문법 정리

## 화살표함수

### this 차이

Object 내 메소드
```js
let Obj = {
name : 'kim',
say : function () { console.log(this)}
}
Obj.say();
//결과 값 : {name: "kim", say: ƒ}
```
<br>

event listener 내
```js
document.querySelector('button').addEventListener('click', function(e){
console.log(this)
});

//결과 값 : <button></button>
```
- ES5 문법에서 사용하던 일반함수의 this는 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정

<br>

**arrow 함수**
```js
document.querySelector('button').addEventListener('click', (e) => {
  let arr = [1, 2, 3];
  arr.forEach(() => {
    console.log(this);
  });
});

  //결과 값 : Window {window: Window, self: Window, 
  //document: document, name: "", location: Location, …}
```
- ES6문법에서 사용되는 화살표 함수의 this는 언제나 상위 스코프의 this를 가리킨다.
- 바깥에 있던 this의 의미를 그대로 내부에서도 사용가능하다.
- arrow 함수는 어디서 사용해도 내부의 this값을 변화 시키지않는다.
- 일반함수 이벤트리스너에선 this == e.currentTarget
- arrow 함수 이벤트리스너에선 this == 바깥의 this값을 사용하기때문에 window 오브젝트가 출력

<br>

### map
map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
```js
arr.map(callback(currentValue[, index[, array]])[, thisArg])
```

**callback**
* 새로운 배열 요소를 생성하는 함수. 다음 세 가지 인수를 가집니다.


**currentValue**
* 처리할 현재 요소.

**index**

* 처리할 현재 요소의 인덱스.

**array**
* map()을 호출한 배열.

**thisArg**
* callback을 실행할 때 this로 사용되는 값.

<br>

#### 숫자배열 재구성

``` js
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles는 이제 [2, 8, 18]
// numbers는 그대로 [1, 4, 9]
```

#### map을 포괄적으로 사용하기 (querySelectorAll)
```js
var elems = document.querySelectorAll('select option:checked');
var values = [].map.call(elems, function(obj) {
  return obj.value;
});
//객체들을 순회 처리
```


<br>

---

<br>

### filter
filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.

```js
arr.filter(callback(element[, index[, array]])[, thisArg])
```

**callback**
* 새로운 배열 요소를 생성하는 함수. 다음 세 가지 인수를 가집니다.


**currentValue**
* 처리할 현재 요소.

**index**

* 처리할 현재 요소의 인덱스.

**array**
* map()을 호출한 배열.

**thisArg**
* callback을 실행할 때 this로 사용되는 값.

(map과 동일)

<br>

```js
const solution = (a, b) => {
    const arr = [...a];
    const answer = arr.filter((el,idx)=> (idx+1)%b == 0);
    console.log(answer)
    
}
solution([1,2,3,4],2)

//[2,4]
```


