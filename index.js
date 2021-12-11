let counter = 2;

const addNew = () => {
  const input = document.querySelector("#add");
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }

  const list = document.querySelector(".list");
  const id = counter++;
  const li = document.createElement("li");
  li.id = "item-" + id;
  const item = document.createElement("div");
  item.className = "item";
  const span = document.createElement("span");
  span.innerHTML = text;
  item.appendChild(span);
  const buttons = document.createElement("div");
  buttons.className = "buttons";
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = () => del(id);
  doneBtn.onclick = () => done(id);

  buttons.appendChild(doneBtn);
  buttons.appendChild(delBtn);

  item.appendChild(buttons);
  li.appendChild(item);
  list.appendChild(li);
  input.value = "";
  input.focus();
};

const del = (id) => {
  const list = document.querySelector(".list");
  const item = document.querySelector("#item-" + id);
  list.removeChild(item);
};

const done = (id) => {
  const item = document.querySelector("#item-" + id);
  const span = item.children[0].children[0];
  if (span.style.textDecoration === "") {
    span.style.textDecoration = "line-through";
  } else {
    span.style.textDecoration = "";
  }
};
