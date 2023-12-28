function addTask() {
  let idk = document.getElementById("idk");
  let date = document.getElementById("date");
  if (idk.value && date.value) {
    let div = document.createElement("div");
    div.className = "addTasks";
    div.innerHTML = `<p>${idk.value} taskini bitirmək - ${date.value}</p>`;
    let section = document.getElementById("taskList");
    section.appendChild(div);
    idk.value = "";
    date.value = "";
  } else {
    alert("Boş yerleri doldurun!!!");
  }
}
function sortTasks(order) {
  let tasksContainer = document.getElementById("taskList");
  let tasks = Array.from(tasksContainer.children);

  tasks.sort((a, b) => {
    let aText = a.textContent.trim().toLowerCase();
    let bText = b.textContent.trim().toLowerCase();

    if (order === "asc") {
      return aText.localeCompare(bText);
    } else if (order === "desc") {
      return bText.localeCompare(aText);
    } else if (order === "date") {
      let aDate = new Date(aText);
      let bDate = new Date(bText);
      return aDate - bDate;
    }
  });
  tasksContainer.innerHTML = "";
  tasks.forEach((task) => tasksContainer.appendChild(task));
}
