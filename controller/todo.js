const AddModel = require("../model/addSchema");
// let nextId = 1;

const Todo = {
  add: async (req, res) => {
    const { text, priority, status, progress } = req.body;
    // const newTodo = { id: nextId++, task, Priority, status };
    const newTodo = { text, priority, status, progress };
    let todos = [];
    todos.push(newTodo);

    if (!text || !priority || !status, progress) {
      return res.json({ message: "Required field(s) are missing" });
    } else {
      try {
        await AddModel.create(todos);
        res.send({ message: "Your todo has been added" });
      } catch (err) {
        res.send(err);
      }
    }
  },

  get: async (req, res) => {
    try {
      const todos = await AddModel.find({}); // Retrieve all todos
      res.json({
        message: "Todos successfully retrieved",
        todos,
        status: true
      });
    } catch (err) {
      res.json({
        message: "Error retrieving todos",
        status: false,
        error: err
      });
    }
  },
  update: async (req, res) => {
    const { id } = req.params
    try {
      const updateTodo = await AddModel.findByIdAndUpdate(id, req.body)
      res.send({
        status: 'success',
        data: {
          Todo: updateTodo
        }
      })
    } catch (error) {
      res.send({
        status: 'fail',
        message: error
      })
    }
  },
  delete: async (req, res) => {
    const { id } = req.params
    try {
      await AddModel.findByIdAndDelete(id)

      res.send({
        status: 'success',
        Todo: null
      })
    } catch (error) {
      res.send({
        status: 'fail',
        message: error
      })
    }
  }
};

module.exports = Todo;