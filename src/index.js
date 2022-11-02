import './style.css';

const todoList = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'complete To Do list project',
    completed: false,
    index: 2,
  },
];

todoList.sort((a, b) => {
  if (a.index < b.index) return -1;
  if (a.index > b.index) return 1;
  return 0;
});

const listSection = document.querySelector('#list-items');
listSection.innerHTML = '';
for (let i = 0; i < todoList.length; i += 1) {
  const task = todoList[i];
  let taskItem = `
    <li class="d-flex s-between list-item">`;
  if (task.completed) {
    taskItem += `<span class="material-icons done" onclick="updateStatus(${task.index}, 'pending')">
          done
        </span>
        <p contenteditable="true" class="completed">
          ${task.description}
        </p>
        `;
  } else {
    taskItem += ` <span class="material-icons">
          check_box_outline_blank
        </span>
        <p contenteditable="true">
          ${task.description}
        </p>`;
  }
  taskItem += `
      <span class="material-icons  move">
        delete
        </span>
      <!-- <span class="material-icons" onclick="deleteTask(${task.index})">
        delete
      </span> -->
    </li>
  `;
  listSection.innerHTML += taskItem;
}