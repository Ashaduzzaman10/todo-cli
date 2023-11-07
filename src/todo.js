class Todo {
  constructor() {
    this.todoList = [];
  }

  addItem(text) {
    const item = {
      text,
      id: this.generateId(),
      created: new Date().toISOString(),
    };
    this.todoList.push(item);
  }

  update(id, text) {
    const itemToUpdate = this.todoList.find((item) => item.id === id);
    if (itemToUpdate) {
      itemToUpdate.text = text;
    }
  }

  done() {
    return this.todoList.shift();
  }

  next() {
    return this.todoList[0];
  }

  list() {
    return this.todoList;
  }

  find(tern) {
    return this.todoList.filter((item) =>
      item.text.toLowerCase().includes(tern.toLowerCase())
    );
  }

  generateId() {
    if (this.todoList.length === 0) return 1;
    return this.todoList[this.todoList.length - 1].id + 1;
  }
}

module.exports = Todo;
