window.addEventListener('load', () => {
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  const todoForm = document.querySelector('#todo-form');

  todoForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = {
      content: e.target.elements.content.value,
      category: e.target.elements.category.value,
      done: false,
      createdAt: new Date().getTime()
    }

    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));

    e.target.reset();

    DisplayTodos();    
  })
  //Always display stored todos on load/refresh
  DisplayTodos();
})

function DisplayTodos() {
  const todoList = document.querySelector('#todo-list');
  //can it be changed to .textContent?
  todoList.innerHTML = "";

	todos.forEach(todo => {
		const todoItem = document.createElement('div');
		todoItem.classList.add('todo-item');

		const label = document.createElement('label');
		const input = document.createElement('input');
		const span = document.createElement('span');
		const content = document.createElement('div');
		const actions = document.createElement('div');
		const edit = document.createElement('button');
		const deleteButton = document.createElement('button');
    const dropdown = document.createElement('button');
    const priorityLvl = document.createElement('button'); 

    input.type = 'checkbox';
		input.checked = todo.done;
		span.classList.add('bubble'); 

    if (todo.category == 'personal') {
      span.classList.add('personal');
    }
    else {
      span.classList.add('programming');
    }

    content.classList.add('todo-content');
    actions.classList.add('actions');
    edit.classList.add('edit');
    deleteButton.classList.add('delete');
    dropdown.classList.add('dropdown');
    priorityLvl.classList.add('priority-lvl');

    //can these be changed to .textContent?
    content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
    edit.innerHTML = 'Edit';
    deleteButton.innerHTML = 'Delete';
    dropdown.innerHTML = `<i class="fa-solid fa-caret-down"></i>`;
    priorityLvl.innerHTML = `<i class="fa-solid fa-flag"></i>`;

    label.appendChild(input);
    label.appendChild(span);
    actions.appendChild(priorityLvl);
    actions.appendChild(edit);
    actions.appendChild(deleteButton);
    actions.appendChild(dropdown);

    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);
    todoList.appendChild(todoItem);

    if (todo.done) {
			todoItem.classList.add('done');
		}

    input.addEventListener('change', (e) => {
			todo.done = e.target.checked;
			localStorage.setItem('todos', JSON.stringify(todos));

			if (todo.done) {
				todoItem.classList.add('done');
			} 
      else {
				todoItem.classList.remove('done');
			}

			DisplayTodos()

		})

    edit.addEventListener('click', (e) => {
			const input = content.querySelector('input');
			input.removeAttribute('readonly');
			input.focus();
			input.addEventListener('blur', (e) => {
				input.setAttribute('readonly', true);
				todo.content = e.target.value;
				localStorage.setItem('todos', JSON.stringify(todos));
				DisplayTodos()

			})
		})

    deleteButton.addEventListener('click', (e) => {
			todos = todos.filter(t => t != todo);
			localStorage.setItem('todos', JSON.stringify(todos));
			DisplayTodos()
		})
  })
}