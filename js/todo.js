// 선택 날짜
const selectDay = document.querySelector("#selectDay");
const today = new Date();
selectDay.innerText = makeSelectDay(today);

function makeSelectDay(day){
  const yy = day.getFullYear();
  let mm = day.getMonth() + 1;
  let dd = day.getDate();
  mm < 10 ? mm = `0${mm}` : mm = mm;
  dd < 10 ? dd = `0${dd}` : dd = dd;
  return `${yy}년 ${mm}월 ${dd}일`;
};

// todoList 내용
const toDoForm = document.querySelector("#todo-form");
const todoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOBOOKS_KEY = new Date().toLocaleDateString().replaceAll(/[. ]/g, "");

let todoLists = JSON.parse(localStorage.getItem(TODOBOOKS_KEY)) || [];
if(todoLists){
  todoLists.forEach(paintTodo);
}

function saveTodoLists(){
 localStorage.setItem(`${TODOBOOKS_KEY}`, JSON.stringify(todoLists));
}

function deleteToDo(e){
  const li = e.target.parentElement;
  const deleteId = e.target.nextElementSibling.id;
  todoLists = todoLists.filter(todoList => todoList.writeDay !== deleteId);
  saveTodoLists();
  li.remove();
};

function changeDoneTodo(e){
  const changeDoneId = e.target.id;
  todoLists.map((todo) => {
    if(todo.writeDay == changeDoneId){
      todo.done == false ? todo.done = true : todo.done = false;
    }
  });
  saveTodoLists();
};

function paintTodo(newTodoObj){
  const {writeDay, text, done} = newTodoObj;

  const li = document.createElement("li");
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener('click', deleteToDo);

  const doneChk = document.createElement("input");
  doneChk.setAttribute('type', 'checkbox');
  doneChk.setAttribute('id', writeDay);
  doneChk.checked = done;
  doneChk.addEventListener('change', changeDoneTodo);

  const doneChkLab = document.createElement("label");
  doneChkLab.setAttribute('for', writeDay);

  const p = document.createElement("p");
  p.innerText = text;
  li.append(button, doneChk, doneChkLab, p);
  toDoList.appendChild(li);
};

let no;
function handleTodoSubmit(e){
  e.preventDefault();
  const newTodo = todoInput.value;
  const regExp = /^\s$/g;
  if(regExp.test(newTodo)){
    alert('한글자 이상 입력해주세요!');
    todoInput.select();
    return;
  }

  if(todoLists != null && todoLists != ''){
    const len = todoLists.length - 1;
    const lastTodoDay = todoLists[len].writeDay;
    no = Number(lastTodoDay.substring(lastTodoDay.lastIndexOf('_') + 1)) + 1;
  }
  else no = 1;

  todoInput.value = "";
  const newTodoObj = {
    writeDay: TODOBOOKS_KEY + '_' + no,
    text: newTodo,
    done: false
  };
  todoLists.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodoLists();
  no++;
};

toDoForm.addEventListener("submit", handleTodoSubmit);


