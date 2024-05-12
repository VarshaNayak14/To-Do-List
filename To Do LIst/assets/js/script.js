// script.js
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        const deleteButton = document.createElement('span');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';
    }
});

taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        // Handle task editing (you can add an edit button too)
    } else if (event.target.classList.contains('delete-button')) {
        event.target.parentElement.remove();
    }
});