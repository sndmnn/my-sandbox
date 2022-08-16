import express, { json } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(json());

let todos = [
  { id: 1, title: 'Aprender TypeScript', completed: false },
  { id: 2, title: 'Aprender React', completed: false },
  { id: 3, title: 'Aprender Node', completed: false },
];

app.get('/', (_, res) => res.status(200).send('Server is Running'));

app.get('/todos', (_, res) => res.status(200).json(todos));

app.patch('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  todos = todos.map((todo) => {
    if (todo.id === Number.parseInt(id)) todo.completed = completed;

    return todo;
  });

  return res.sendStatus(200);
});

app.listen(3333, () => console.log('Server is Running'));
