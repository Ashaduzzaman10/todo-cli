
/**
 * @title : todo app terminal base 
 * @author : akash
 * @date : 10 oct ,2023
 */

const { argv } = require("yargs");
const Todo = require("./todo");

(function init() {
  const todo = new Todo();
  const { _: baseCommand } = argv;

  switch (baseCommand[0]) {
    case "add": {
      const text = argv.text;
      todo.addItem(text);
      console.log("Todo added");
      break;
    }
    case "update": {
      const id = parseInt(argv.id);
      const text = argv.text;
      todo.update(id, text);
      console.log("Todo updated");
      break;
    }
    case "next": {
      const item = todo.next();
      if (item) {
        console.log(`${item.id} - ${item.text} [${item.created}]`);
      } else {
        console.log("No items in the list.");
      }
      break;
    }
    case "done": {
      const doneItem = todo.done();
      if (doneItem) {
        console.log(`Completed: ${doneItem.text}`);
      } else {
        console.log("No items in the list.");
      }
      break;
    }
    case "find": {
      const term = argv.term;
      const items = todo.find(term);
      if (items.length === 0) {
        console.log("No items found.");
      } else {
        items.forEach((item) => {
          console.log(`${item.id} - ${item.text} [${item.created}]`);
        });
      }
      break;
    }
    case "list": {
      const items = todo.list();
      if (items.length === 0) {
        console.log("No items in the list.");
      } else {
        items.forEach((item) => {
          console.log(`${item.id} - ${item.text} [${item.created}]`);
        });
      }
      break;
    }
    default:
      console.log("Command not found");
  }
})();
