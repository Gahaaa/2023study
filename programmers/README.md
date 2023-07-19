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

### filter


### map