import express from 'express';
import mongoose from 'mongoose';

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
  void req;
  res.send('Express + TypeScript Server');
});

app.post('/login', (req, res) => {
  const login = req.body.login;
  const password = req.body.password;
});

const start = async () => {
  await mongoose.connect('mongodb://mongo:27017');
  mongoose.set('strictQuery', false);

  app.listen(5000, () => {
    console.log(`[server]: Server is running at http://localhost:5000`);
  });
};
start();
