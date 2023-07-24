/*
영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 
문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

입출력 예
numbers	result
"onetwothreefourfivesixseveneightnine"	123456789
"onefourzerosixseven"	14067
*/


//map 사용
function solution(numbers) {
    const num = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    num.map((i, idx)=>{
        numbers = numbers.split(i).join(idx)
    })
    return parseInt(numbers)
}

//forEach 사용
function solution(numbers) {
    const num = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    num.forEach((i, idx)=>{
        numbers = numbers.split(i).join(idx)
    })
    return parseInt(numbers)
}

//for 사용
function solution(numbers) {
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(let i = 0; i < num.length; i++){
        numbers = numbers.split(num[i]).join(i)
        console.log(numbers)
        // console.log(numbers.split(num[i]))
    }
    
}

/*
split(separator, limit)
-separator: 원본 문자열을 끊어야 할 부분을 나타내는 문자열을 나타냅니다.
-limit: 끊어진 문자열의 최대 개수를 나타내는 정수

number "oneoneonetwothreetwo"

numbers = numbers.split(num[i]).join(i)
console.log(numbers)
=>
"11twothreetwo"
"112three2"
"11232"


아하,,,




 */