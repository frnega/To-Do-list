import './style.css';

import List from './listt.js';

const todoList = new List();
todoList.display();
// adds new Activity
document.querySelector('#add-task').addEventListener('submit', (e) => {
  e.preventDefault();
  const activity = e.target.elements.activity.value;
  todoList.addActivity(activity);
  e.target.reset();
});

//  clears completed Activities
document.querySelector('.clear-completed').addEventListener('click', () => {
  todoList.clearCompleted();
});

//  clears all handler interactive
document.querySelector('#delete-all').addEventListener('click', () => {
  todoList.clearAll();
});