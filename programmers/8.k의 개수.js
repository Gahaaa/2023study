/*1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, 
i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요. */

/*
입출력 예
i	j	k	result
1	13	1	6
10	50	5	5
3	10	2	0
 */

//내 풀이
function solution(i, j, k) {
    let num = '';
    for(i= i; i <= j; i ++){
        num += i;
    }
    let result = 0;
    [...num].filter((el)=>{
        if(el === k.toString()){
            result+=1;
        }
    })
    
    return result;
    
}

// 다른사람풀이
function solution(i, j, k) {
    let a ='';
    for(i;i<=j;i++){
        a += i;
    }

    return a.split(k).length-1;
    //걍 k찾아서 길이 출력
}
//아주 멋있다