import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Node.js!');
});

const PORT = 80 || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
