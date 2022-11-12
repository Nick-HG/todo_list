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
    const priorityLvl = document.createElement('button'); 
    const dropdown = document.createElement('button');
    const panel = document.createElement('div');
    const para = document.createElement('p');


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
    dropdown.classList.add('dropdown', 'accordion');
    priorityLvl.classList.add('priority-lvl');
    panel.classList.add('panel');

    //can these be changed to .textContent?
    content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
    edit.innerHTML = 'Edit';
    deleteButton.innerHTML = 'Delete';
    dropdown.innerHTML = `<i class="fa-solid fa-caret-down"></i>`;
    priorityLvl.innerHTML = `<i class="fa-solid fa-flag"></i>`;
    para.innerHTML = `<input type="text" value="${todo.content}" readonly>`;

    label.appendChild(input);
    label.appendChild(span);
    actions.appendChild(priorityLvl);
    actions.appendChild(edit);
    actions.appendChild(deleteButton);
    actions.appendChild(dropdown);
    panel.appendChild(para);

    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);
    todoItem.appendChild(panel);
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


    var i;
    var drop = document.getElementsByClassName('dropdown');
    for (i = 0; i < drop.length; i++) {
      drop[i].addEventListener("click", function() {
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }

  })
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRCxhQUFhO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGFBQWE7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsR0FBRztBQUNILEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSkgfHwgW107XG4gIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybScpO1xuXG4gIHRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHRvZG8gPSB7XG4gICAgICBjb250ZW50OiBlLnRhcmdldC5lbGVtZW50cy5jb250ZW50LnZhbHVlLFxuICAgICAgY2F0ZWdvcnk6IGUudGFyZ2V0LmVsZW1lbnRzLmNhdGVnb3J5LnZhbHVlLFxuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgfVxuXG4gICAgdG9kb3MucHVzaCh0b2RvKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG5cbiAgICBlLnRhcmdldC5yZXNldCgpO1xuXG4gICAgRGlzcGxheVRvZG9zKCk7ICAgIFxuICB9KVxuICAvL0Fsd2F5cyBkaXNwbGF5IHN0b3JlZCB0b2RvcyBvbiBsb2FkL3JlZnJlc2hcbiAgRGlzcGxheVRvZG9zKCk7XG59KVxuXG5mdW5jdGlvbiBEaXNwbGF5VG9kb3MoKSB7XG4gIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbGlzdCcpO1xuICAvL2NhbiBpdCBiZSBjaGFuZ2VkIHRvIC50ZXh0Q29udGVudD9cbiAgdG9kb0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcblxuXHR0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuXHRcdGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dG9kb0l0ZW0uY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7XG5cblx0XHRjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cdFx0Y29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGNvbnN0IGFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0Y29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgcHJpb3JpdHlMdmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG4gICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cblxuICAgIGlucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuXHRcdGlucHV0LmNoZWNrZWQgPSB0b2RvLmRvbmU7XG5cdFx0c3Bhbi5jbGFzc0xpc3QuYWRkKCdidWJibGUnKTsgXG5cbiAgICBpZiAodG9kby5jYXRlZ29yeSA9PSAncGVyc29uYWwnKSB7XG4gICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3BlcnNvbmFsJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdwcm9ncmFtbWluZycpO1xuICAgIH1cblxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndG9kby1jb250ZW50Jyk7XG4gICAgYWN0aW9ucy5jbGFzc0xpc3QuYWRkKCdhY3Rpb25zJyk7XG4gICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duJywgJ2FjY29yZGlvbicpO1xuICAgIHByaW9yaXR5THZsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWx2bCcpO1xuICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ3BhbmVsJyk7XG5cbiAgICAvL2NhbiB0aGVzZSBiZSBjaGFuZ2VkIHRvIC50ZXh0Q29udGVudD9cbiAgICBjb250ZW50LmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIiR7dG9kby5jb250ZW50fVwiIHJlYWRvbmx5PmA7XG4gICAgZWRpdC5pbm5lckhUTUwgPSAnRWRpdCc7XG4gICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9ICdEZWxldGUnO1xuICAgIGRyb3Bkb3duLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNhcmV0LWRvd25cIj48L2k+YDtcbiAgICBwcmlvcml0eUx2bC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1mbGFnXCI+PC9pPmA7XG4gICAgcGFyYS5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3RvZG8uY29udGVudH1cIiByZWFkb25seT5gO1xuXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQocHJpb3JpdHlMdmwpO1xuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgYWN0aW9ucy5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoZHJvcGRvd24pO1xuICAgIHBhbmVsLmFwcGVuZENoaWxkKHBhcmEpO1xuXG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGFjdGlvbnMpO1xuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHBhbmVsKTtcbiAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvSXRlbSk7XG4gICAgXG5cbiAgICBpZiAodG9kby5kb25lKSB7XG5cdFx0XHR0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG5cdFx0fVxuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcblx0XHRcdHRvZG8uZG9uZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuXG5cdFx0XHRpZiAodG9kby5kb25lKSB7XG5cdFx0XHRcdHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcblx0XHRcdH0gXG4gICAgICBlbHNlIHtcblx0XHRcdFx0dG9kb0l0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZG9uZScpO1xuXHRcdFx0fVxuXHRcdFx0RGlzcGxheVRvZG9zKClcblx0XHR9KVxuXG5cbiAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdGNvbnN0IGlucHV0ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuXHRcdFx0aW5wdXQucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xuXHRcdFx0aW5wdXQuZm9jdXMoKTtcblx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZSkgPT4ge1xuXHRcdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgdHJ1ZSk7XG5cdFx0XHRcdHRvZG8uY29udGVudCA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuXHRcdFx0XHREaXNwbGF5VG9kb3MoKVxuXHRcdFx0fSlcblx0XHR9KVxuXG5cbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0dG9kb3MgPSB0b2Rvcy5maWx0ZXIodCA9PiB0ICE9IHRvZG8pO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcblx0XHRcdERpc3BsYXlUb2RvcygpXG5cdFx0fSlcblxuXG4gICAgdmFyIGk7XG4gICAgdmFyIGRyb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcm9wZG93bicpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBkcm9wLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkcm9wW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHBhbmVsLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgICAgIHBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfSlcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=