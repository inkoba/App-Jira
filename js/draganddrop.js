const drag = (event) => {
  event.dataTransfer.setData('text', event.target.id);
}

const drop = (event) => {
  event.preventDefault();
  let data = event.dataTransfer.getData('text');
  event.target.appendChild(document.getElementById(data));
}

const allwDrop = (event) => {
  event.preventDefault();
}

const initDragAndDrop = () => {
  let taskList = document.getElementsByClassName('task-item');
  let boxList = document.getElementsByClassName('task-col1');

  for (let task of taskList) {
    task.draggable = true;
    task.addEventListener('dragstart', drag)
  }

  for (let col of boxList) {
    col.addEventListener('drop', drop);
    col.addEventListener('dragover', allwDrop);
  }
}

initDragAndDrop();