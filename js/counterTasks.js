const counterTasks = () => {
  const currentCounter = document.querySelector('.task-counter');
  const boxTasks = document.querySelector('.all-tasks');
  const currentTasks = boxTasks.getElementsByClassName('task-item').length;

  currentCounter.innerHTML = currentTasks;
}

counterTasks();