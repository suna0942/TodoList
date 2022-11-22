const selectDayEl = document.querySelector("#selectDay");
const calContents = document.querySelector(".cal_content");
let selectDay;
let todoBooks_key = makeSelectDay(new Date());
selectDayEl.innerText = makeSelectDay(changeMonth);

// 원하는 날짜 선택
calContents.addEventListener('click', (e) => {
  const regExp = /^\d*$/g;
  if(!regExp.test(e.target.textContent)) return;

  const calContentDivs = document.querySelectorAll(".cal_content div");
  [...calContentDivs].forEach((div) => {
    if(div === e.target)
      div.classList.add('select');
    else
      div.classList.remove('select');
  });
  
  const ouputDays = `${changeMonth.getFullYear()}-${changeMonth.getMonth()+1}-${e.target.textContent}`;
  selectDayEl.innerText = makeSelectDay(ouputDays);
  todoBooks_key = selectDay;
  findTodoLists();
});

function makeSelectDay(day){
  selectDay = new Date(day).toLocaleDateString('ko', {dateStyle: 'full'});
  selectDay = selectDay.slice(0, selectDay.lastIndexOf(" "));
  return selectDay;
};

// todoList 내용 변수
const toDoForm = document.querySelector("#todo-form");
const todoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

// localStorage에 오늘 또는 선택한 날짜로 저장된 todo가 있는지 확인 후 paint 진행
let todoLists = '';
function findTodoLists(){
  todoLists = JSON.parse(localStorage.getItem(todoBooks_key)) || [];
  if(todoLists){
    toDoList.innerHTML = '';
    todoLists.forEach(paintTodo);
  };
};

function saveTodoLists(){
 localStorage.setItem(`${todoBooks_key}`, JSON.stringify(todoLists));
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
  findTodoLists();
  if(todoLists != null && todoLists != ''){
    const len = todoLists.length - 1;
    const lastTodoDay = todoLists[len].writeDay;
    no = Number(lastTodoDay.substring(lastTodoDay.lastIndexOf('_') + 1)) + 1;
  }
  else no = 1;

  todoInput.value = "";
  let _writeDay = todoBooks_key.replaceAll(/[년월일 ]/g, '');
  const newTodoObj = {
    writeDay: _writeDay + '_' + no,
    text: newTodo,
    done: false
  };
  todoLists.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodoLists();
  no++;
};

findTodoLists();
toDoForm.addEventListener("submit", handleTodoSubmit);


