/*
두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다. 
첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때, 
이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.

입출력 예 #1

예제 1번은 a와 d가 각각 3, 4이고 included의 길이가 5입니다. 이를 표로 나타내면 다음과 같습니다.

1항	2항	3항	4항	5항
등차수열	3	7	11	15	19
included	true	false	false	true	true
따라서 true에 해당하는 1항, 4항, 5항을 더한 3 + 15 + 19 = 37을 return 합니다.
*/

function solution(a, d, included) {
    let answer = [];
    let forLength=a+d*(included.length-1);
    let result=0;
    let arrIdx=0;
    
    for (let i = a; i<=forLength; i+=d){
        
       if(included[arrIdx] == true){
           result+=i;
       }
        
        arrIdx+=1;
    }
    
    return result;
    
   
}