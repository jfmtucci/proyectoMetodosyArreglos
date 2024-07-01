const taskList = [
  {
    id: "01",
    task: "Lavar el Auto",
    complete: false,
  },
  {
    id: "02",
    task: "Bañar a Luna",
    complete: false,
  },
  {
    id: "03",
    task: "terminar proyeto DesafioLatam",
    complete: false,
  },
];

const btn = document.querySelector("#button");
const container = document.querySelector("#taskItems");
const total = document.querySelector("#total");
const text = document.querySelector("#inputText");
let cantidad = document.querySelector("#cantidad");

const renderList = () => {
  container.innerHTML = "";

  taskList.forEach((e) => {
    container.innerHTML += `<li id="task"><div class="task-left"><span>${
      e.id
    }</span><span>${
      e.task
    }</span></div><div class="task-rigth"><input type="checkbox" id="cbox${
      e.id
    }" ${e.complete ? "checked" : ""}><button id="btnDelete${
      e.id
    }" class="btnDelete"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /><path d="M9 9l6 6m0 -6l-6 6" /></svg></button></div></li>`;
  });
  total.innerHTML = `Total: <b>${taskList.length}</b>`;

  addCheckboxListeners();
};

const addCheckboxListeners = () => {
  let z = taskList.filter((e) => e.complete).length;
  cantidad.innerHTML = `Realizadas: ${z}`;

  taskList.forEach((e) => {
    const checkbox = document.getElementById(`cbox${e.id}`);
    const btnDelete = document.getElementById(`btnDelete${e.id}`);

    checkbox.addEventListener("change", () => {
      e.complete = checkbox.checked;
      renderList();
    });
    btnDelete.addEventListener("click", () => {
      const id = btnDelete.getAttribute("id");

      if (id !== -1) {
        taskList.splice(id, 1);
        renderList();
      }
    });
  });
};

btn.addEventListener("click", () => {
  let i =
    taskList.length < 9 ? `0${taskList.length + 1}` : `${taskList.length + 1}`;
  taskList.push({
    id: i,
    task: text.value,
    complete: false,
  });
  renderList();
  text.value = "";
});

renderList();
