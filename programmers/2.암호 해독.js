/*
군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.

암호화된 문자열 cipher를 주고받습니다.
그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(cipher, code) {
    var cipher = [...cipher];
    var answer =[];
    
    for(i=code;i<=cipher.length;i++){
        if(i%code == 0){
            
            answer.push(cipher[i-1])
        }
        
    }
    
    return answer.join("");
}


function solution(cipher, code) {
    const arr = [...cipher];
    const answer = arr.filter((el,idx)=> (idx+1)%code == 0);
    
    return answer.join("");
}

/*
Spread 연산자로 얕은 복사
const arr = [...cipher]
filter를 이용해 code의 배수 번째 값 answer에 넣음
join 이용해 배열을 문자로 합치면 끗
 */

