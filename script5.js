const addButton= document.getElementById("addButton")
const task=document.getElementById("task")
const tasklist=document.getElementById("taskList")
console.log("h")
addButton.addEventListener('click',()=>{
  const tasktoadd=task.value.trim();
  if(tasktoadd==="")
  {
    return;
  }
  console.log("hey")
  const taskitem=document.createElement('li')
  taskitem.textContent=tasktoadd;
  const deletebutton=document.createElement("button")
  deletebutton.textContent="Delete"
  deletebutton.classList.add('delete-button');
  deletebutton.addEventListener('click',()=>{
    tasklist.removeChild(taskitem)
  });
  taskitem.appendChild(deletebutton)

  tasklist.appendChild(taskitem)
})