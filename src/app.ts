type Todo = {
  id: number
  title: string
  completed: boolean
}

const input = document.querySelector('input')!;
const form = document.querySelector('form')!;
const ul = document.querySelector('ul')!;
const todos: Todo[] = [];
let lastId = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if(input.value === "") return;

  const todo: Todo = {
    id: lastId++,
    title: input.value,
    completed: false
  }
  todos.push(todo);

  const li = document.createElement('li');
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const title = document.createElement('span');
  title.className = 'title';
  title.innerText = input.value;
  const x = document.createElement('span');
  x.className = 'delete';
  li.append(checkbox);
  li.append(title);
  li.append(x);
  ul.append(li);

  input.value = '';
});

ul.addEventListener('click', (e) => {
  console.log(e);
})