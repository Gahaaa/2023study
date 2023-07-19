/*정수 배열 numbers와 정수 n이 매개변수로 주어집니다. 
numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.
*/


function solution(numbers, n) {
    result =0;
    
    for(i=0;i<numbers.length;i++){
        result+=numbers[i];
        
        if(result>n){
            return result;
            
        }
    }
}


const solution = (numbers, n) => {
    let result = 0;
    
    numbers.forEach(e =>{
        if(n >= result){
            result+=e;
        }
    });
    
    return result;
}

/*
달라진건 사실 별로 없음..

1. 화살표 함수 사용
2. for -> forEach
*/