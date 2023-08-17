/*
머쓱이는 행운의 숫자 7을 가장 좋아합니다. 
정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

입출력 예
array	result
[7, 77, 17]	4
[10, 29]	0
*/

function solution(array) {
    let arr = array.join("");
    let answer=0;
    [...arr].forEach(e =>{
        if(e == 7){
            answer+=1;
        }
    })
    
    return answer;
}

function solution(array) {
    let arr = array.join("");
    return [...arr].filter(e => e == '7').length;
}

/*
array 문자열로 arr로 만들어
얕은 복사로 배열 생성 후 7의 길이 출력 
 */