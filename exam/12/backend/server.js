const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let students = [
  { id: 1, name: 'abc', course: 'CSE-IDP' },
  { id: 2, name: 'def', course: 'CSE-IDP' }
];

app.get('/students', (req, res) => {
  res.json(students);
});

app.post('/students', (req, res) => {
  const student = { id: Date.now(), ...req.body };
  students.push(student);
  res.status(201).json(student);
});

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});