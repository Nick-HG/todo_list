/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
    //CHANGES
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
    //CHANGES
    dropdown.classList.add('dropdown');
    priorityLvl.classList.add('priority-lvl');

    //can these be changed to .textContent?
    content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
    edit.innerHTML = 'Edit';
    deleteButton.innerHTML = 'Delete';
    //CHANGES
    dropdown.innerHTML = `<i class="fa-solid fa-caret-down"></i>`;
    priorityLvl.innerHTML = `<i class="fa-solid fa-flag"></i>`;

    label.appendChild(input);
    label.appendChild(span);
    //CHANGES
    actions.appendChild(priorityLvl);
    
    actions.appendChild(edit);
    actions.appendChild(deleteButton);
    //CHANGES
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRCxhQUFhO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEdBQUc7QUFDSCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpIHx8IFtdO1xuICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWZvcm0nKTtcblxuICB0b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB0b2RvID0ge1xuICAgICAgY29udGVudDogZS50YXJnZXQuZWxlbWVudHMuY29udGVudC52YWx1ZSxcbiAgICAgIGNhdGVnb3J5OiBlLnRhcmdldC5lbGVtZW50cy5jYXRlZ29yeS52YWx1ZSxcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgIH1cblxuICAgIHRvZG9zLnB1c2godG9kbyk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuXG4gICAgZS50YXJnZXQucmVzZXQoKTtcblxuICAgIERpc3BsYXlUb2RvcygpOyAgICBcbiAgfSlcbiAgLy9BbHdheXMgZGlzcGxheSBzdG9yZWQgdG9kb3Mgb24gbG9hZC9yZWZyZXNoXG4gIERpc3BsYXlUb2RvcygpO1xufSlcblxuZnVuY3Rpb24gRGlzcGxheVRvZG9zKCkge1xuICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWxpc3QnKTtcbiAgLy9jYW4gaXQgYmUgY2hhbmdlZCB0byAudGV4dENvbnRlbnQ/XG4gIHRvZG9MaXN0LmlubmVySFRNTCA9IFwiXCI7XG5cblx0dG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcblx0XHRjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbScpO1xuXG5cdFx0Y29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXHRcdGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0Y29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIC8vQ0hBTkdFU1xuICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgcHJpb3JpdHlMdmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG5cbiAgICBpbnB1dC50eXBlID0gJ2NoZWNrYm94Jztcblx0XHRpbnB1dC5jaGVja2VkID0gdG9kby5kb25lO1xuXHRcdHNwYW4uY2xhc3NMaXN0LmFkZCgnYnViYmxlJyk7IFxuXG4gICAgaWYgKHRvZG8uY2F0ZWdvcnkgPT0gJ3BlcnNvbmFsJykge1xuICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdwZXJzb25hbCcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgncHJvZ3JhbW1pbmcnKTtcbiAgICB9XG5cbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGVudCcpO1xuICAgIGFjdGlvbnMuY2xhc3NMaXN0LmFkZCgnYWN0aW9ucycpO1xuICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdCcpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcbiAgICAvL0NIQU5HRVNcbiAgICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bicpO1xuICAgIHByaW9yaXR5THZsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWx2bCcpO1xuXG4gICAgLy9jYW4gdGhlc2UgYmUgY2hhbmdlZCB0byAudGV4dENvbnRlbnQ/XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3RvZG8uY29udGVudH1cIiByZWFkb25seT5gO1xuICAgIGVkaXQuaW5uZXJIVE1MID0gJ0VkaXQnO1xuICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSAnRGVsZXRlJztcbiAgICAvL0NIQU5HRVNcbiAgICBkcm9wZG93bi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jYXJldC1kb3duXCI+PC9pPmA7XG4gICAgcHJpb3JpdHlMdmwuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtZmxhZ1wiPjwvaT5gO1xuXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIC8vQ0hBTkdFU1xuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQocHJpb3JpdHlMdmwpO1xuICAgIFxuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIC8vQ0hBTkdFU1xuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoZHJvcGRvd24pO1xuXG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGFjdGlvbnMpO1xuICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcblxuICAgIGlmICh0b2RvLmRvbmUpIHtcblx0XHRcdHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcblx0XHR9XG5cbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuXHRcdFx0dG9kby5kb25lID0gZS50YXJnZXQuY2hlY2tlZDtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG5cblx0XHRcdGlmICh0b2RvLmRvbmUpIHtcblx0XHRcdFx0dG9kb0l0ZW0uY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuXHRcdFx0fSBcbiAgICAgIGVsc2Uge1xuXHRcdFx0XHR0b2RvSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJyk7XG5cdFx0XHR9XG5cblx0XHRcdERpc3BsYXlUb2RvcygpXG5cblx0XHR9KVxuXG4gICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRjb25zdCBpbnB1dCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcblx0XHRcdGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgncmVhZG9ubHknKTtcblx0XHRcdGlucHV0LmZvY3VzKCk7XG5cdFx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGUpID0+IHtcblx0XHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsIHRydWUpO1xuXHRcdFx0XHR0b2RvLmNvbnRlbnQgPSBlLnRhcmdldC52YWx1ZTtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcblx0XHRcdFx0RGlzcGxheVRvZG9zKClcblxuXHRcdFx0fSlcblx0XHR9KVxuXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdHRvZG9zID0gdG9kb3MuZmlsdGVyKHQgPT4gdCAhPSB0b2RvKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG5cdFx0XHREaXNwbGF5VG9kb3MoKVxuXHRcdH0pXG4gIH0pXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9