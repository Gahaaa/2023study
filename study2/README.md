# 퍼블스터디

## 메모기능 구현
### 작업 가이드

- 메모 추가/삭제/모두 삭제 기능은 구현되어 있으며, 추가해야 할 기능은 총 3가지로 아래와 같습니다.
1. 개별 메모 수정 기능
2. 개별 메모 여러개의 라벨 기능 추가 (My Jobs > 업무 상세 > label란 참조)
3. 우선순위 속성 추가 -> 우선순위 란 입력시 우선순위별로 정렬되며, 미입력시 등록순으로 정렬됩니다. (같은 순위일 경우에도 등록순으로 정렬)
- 그 외 추가하고 싶으신 기능이 있다면 자유롭게 추가해주시면 됩니다.

<br>

---

<br>

### constructor
constructor 메서드는 클래스의 인스턴스 객체를 생성하고 초기화하는 특별한 메서드입니다.
```js
class Item {
  constructor(memoName) {
    this.newmemo(memoName);
  }

  ...
}
```

<br>

### sort
```js
arr.sort([compareFunction])
```
- 이 함수는 두 개의 배열 element를 파라미터로 입력 받습니다.

이 함수가 a, b 두개의 element를 파라미터로 입력받을 경우,

- 이 함수가 리턴하는 값이 0보다 작을 경우,  a가 b보다 앞에 오도록 정렬하고,

- 이 함수가 리턴하는 값이 0보다 클 경우, b가 a보다 앞에 오도록 정렬합니다.

- 만약 0을 리턴하면, a와 b의 순서를 변경하지 않습니다.