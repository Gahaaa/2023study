const AddmemoButton = document.getElementById("add-memo"),
  RemoveAllButton = document.getElementById("remove-all"),
  memoList = document.querySelector(".memos");

class Item {
  constructor(memoName) {
    this.newmemo(memoName);
  }

  newmemo(memo) {
    const div = document.createElement("div");
    const Input = document.createElement("input");
    Input.value = memo;
    Input.disabled = true;

    // 우선순위
    const PriorityInput = document.createElement("input");
    const PriorityButton = document.createElement("button");
    PriorityInput.classList.add('priority');
    PriorityInput.placeholder="우선순위";
    PriorityButton.innerText="순서저장";
    PriorityButton.addEventListener("click", () => {
        let PrioritVal = PriorityInput.value
        
        if(isNaN(PrioritVal)){
            alert('숫자만 입력');
            PriorityInput.value = '';

            return false;
        }else{
    
            editOrder();
        }

      
    });

    // 삭제
    const DeleteButton = document.createElement("button");
    DeleteButton.innerText = "❌";
    DeleteButton.addEventListener("click", () => {
      memoList.removeChild(div);
    });
    DeleteButton.classList.add("delete-button");

    // 수정
    const EditButton = document.createElement("button");
    EditButton.innerText = "수정";
    EditButton.addEventListener("click", () => {
       
        if(Input.disabled == false){
            EditButton.innerText = "수정";
            Input.disabled = true;

            return false;
        }

        EditButton.innerText = "완료";
        Input.disabled = false;
    });
    
    div.append(PriorityInput,PriorityButton, Input, DeleteButton, EditButton);

    memoList.appendChild(div);
  }
}

const checkInput = () => {
  const input = document.getElementById("memo-text");
  if (input.value !== "") {
    new Item(input.value);
  }
  input.value = "";
};

const deletememos = () => {
  if(confirm('모두 삭제하겠습니까?')){
    while (memoList.hasChildNodes()) {
      memoList.removeChild(memoList.firstChild);
    }
  }
  
};

const editOrder = () => {
  const memoItems = Array.from(memoList.children);

  const sortedItems = memoItems.sort((a, b) => {
    const aPriority = parseInt(a.querySelector('.priority').value);
    const bPriority = parseInt(b.querySelector('.priority').value);

    if (isNaN(aPriority) && isNaN(bPriority)) {
      return 0; // a와 b 모두 우선순위가 없는 경우 순서를 변경하지 않음

    } else if (isNaN(aPriority)) {
      return 1; // a의 우선순위가 없는 경우 a를 b보다 아래로 내림

    } else if (isNaN(bPriority)) {
      return -1; // b의 우선순위가 없는 경우 b를 a보다 아래로 내림

    }

    return aPriority - bPriority;
  });

  for (const item of sortedItems) {
    memoList.appendChild(item);
  }
};


RemoveAllButton.addEventListener("click", deletememos);
AddmemoButton.addEventListener("click", checkInput);