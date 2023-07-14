const AddmemoButton = document.getElementById("add-memo");
const RemoveAllButton = document.getElementById("remove-all");
const memoList = document.querySelector(".memos");

class Item {
  constructor(memoName, priority) {
    this.newmemo(memoName, priority);
  }

  newmemo(memo, priority) {
    const div = document.createElement("div");
    const Input = document.createElement("input");
    Input.value = memo;
    Input.disabled = true;

    // 우선순위
    const PriorityInput = document.createElement("input");
    PriorityInput.classList.add("priority");
    PriorityInput.placeholder = "우선순위";
    PriorityInput.value = priority || ""; // 저장된 우선순위 불러오기
    const PriorityButton = document.createElement("button");
    PriorityButton.innerText = "순서저장";
    PriorityButton.addEventListener("click", () => {
      let PrioritVal = PriorityInput.value;

      if (isNaN(PrioritVal)) {
        alert("숫자만 입력");
        PriorityInput.value = "";
        return false;
      } else {
        editOrder();
      }
    });

    // 삭제
    const DeleteButton = document.createElement("button");
    DeleteButton.innerText = "❌";
    DeleteButton.addEventListener("click", () => {
      memoList.removeChild(div);
      saveMemos(); // 메모가 삭제될 때 저장소 업데이트
    });
    DeleteButton.classList.add("delete-button");

    // 수정
    const EditButton = document.createElement("button");
    EditButton.innerText = "수정";
    EditButton.addEventListener("click", () => {
      if (Input.disabled == false) {
        EditButton.innerText = "수정";
        Input.disabled = true;
        saveMemos(); // 메모가 수정될 때 저장소 업데이트
        return false;
      }

      EditButton.innerText = "완료";
      Input.disabled = false;
    });

    div.append(PriorityInput, PriorityButton, Input, DeleteButton, EditButton);

    memoList.appendChild(div);
  }
}

const checkInput = () => {
  const input = document.getElementById("memo-text");
  if (input.value !== "") {
    new Item(input.value);
    saveMemos(); // 메모가 추가될 때 저장소 업데이트
  }
  input.value = "";
};

const deletememos = () => {
  if (confirm("모두 삭제하겠습니까?")) {
    while (memoList.hasChildNodes()) {
      memoList.removeChild(memoList.firstChild);
    }
    saveMemos(); // 메모가 삭제될 때 저장소 업데이트
  }
};

const editOrder = () => {
    const memoItems = Array.from(memoList.children);
    console.log(memoItems)

  const sortedItems = memoItems.sort((a, b) => {
    const aPriority = parseInt(a.querySelector(".priority").value);
    const bPriority = parseInt(b.querySelector(".priority").value);

    if (isNaN(aPriority) && isNaN(bPriority)) {
      return 0; // a와 b 모두 우선순위가 없는 경우 순서를 변경하지 않음
    } else if (isNaN(aPriority)) {
      return 1; // a의 우선순위가 없는 경우 a를 b보다 아래로 내림
    } else if (isNaN(bPriority)) {
      return -1; // b의 우선순위가 없는 경우 b를 a보다 아래로 내림
    }
    console.log(aPriority);
    console.log(bPriority);

    return aPriority - bPriority;
  });

  for (const item of sortedItems) {
    memoList.appendChild(item);
    console.log(item)
  }

  saveMemos(); // 메모 우선순위가 변경될 때 저장소 업데이트
};

const saveMemos = () => {
  const memoItems = Array.from(memoList.children);
  const memos = memoItems.map((item) => {
    const memo = item.querySelector("input:not(.priority)").value;
    const priority = item.querySelector(".priority").value;
    return { memo, priority };
  });

  localStorage.setItem("memos", JSON.stringify(memos));
};

const loadMemos = () => {
  const savedMemos = localStorage.getItem("memos");
  if (savedMemos) {
    const memos = JSON.parse(savedMemos);
    memos.forEach((memo) => {
      new Item(memo.memo, memo.priority);
    });
  }
};

RemoveAllButton.addEventListener("click", deletememos);
AddmemoButton.addEventListener("click", checkInput);

window.addEventListener("load", loadMemos);
