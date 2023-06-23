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
    
            editOrder(PrioritVal);
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
  while (memoList.hasChildNodes()) {
    memoList.removeChild(memoList.firstChild);
  }
};

const editOrder = (val) => {
    let orderArr =[];
    console.log(val)

    


}

RemoveAllButton.addEventListener("click", deletememos);
AddmemoButton.addEventListener("click", checkInput);