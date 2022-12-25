// create html elements
const header = document.createElement('header');
const appTitle = document.createElement('h1');
const listHeader = document.createElement('h1');
const inputBlock = document.createElement('div');
const inputItem = document.createElement('input');
const priorityListBlock = document.createElement('div');
const priority = document.createElement('select');
const high = document.createElement('option');
const medium = document.createElement('option');
const low = document.createElement('option');
const addBtn = document.createElement('button');

// set attributes
inputItem.setAttribute('placeholder', 'Enter todo item');
priority.setAttribute('placeholder', 'Priority level');
priority.append(high, medium, low);

// set contents
appTitle.innerText = 'My Todo App';
addBtn.innerText = 'Add';
listHeader.innerText = 'My Todo List';
high.innerText = 'High';
medium.innerText = 'Medium';
low.innerText = 'Low';

// append elements
header.prepend(appTitle);
inputBlock.prepend(inputItem, priority, addBtn);
priorityListBlock.prepend(listHeader);
document.body.append(header, inputBlock, priorityListBlock);

const todos = JSON.stringify(localStorage);
todoList = JSON.parse(todos);
for (todo in todoList) {
  const todoBlock = document.createElement('article');
  const todoItem = document.createElement('div');
  const controlBlock = document.createElement('div');
  const high = document.createElement('button');
  const medium = document.createElement('button');
  const low = document.createElement('button');
  const removeBtn = document.createElement('button');
  const priorityLevel = todoList[todo];

  todoItem.setAttribute('class', priorityLevel);

  todoItem.innerText = todo;
  high.innerText = 'H';
  medium.innerText = 'M';
  low.innerText = 'L';
  removeBtn.innerText = 'Remove';
  todoBlock.append(todoItem, controlBlock);
  controlBlock.append(high, medium, low, removeBtn);
  priorityListBlock.append(todoBlock, controlBlock);
}

function render() {
  const priorityLevel = priority.value;
  const todo = inputItem.value;
  localStorage.setItem(todo, priorityLevel);
  location.reload();
}

// console.log(JSON.parse(dB));
addBtn.addEventListener('click', render);
