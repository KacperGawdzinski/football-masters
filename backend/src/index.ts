import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { User } from './models/user';

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const saltRounds = 10;
const JWT_TOKEN = process.env.JWT_TOKEN || '';

app.post('/login', async (req, res) => {
  const login = req.body.login;
  const password = req.body.password;

  const account = await User.findOne({ login });
  if (account) {
    if (await bcrypt.compare(password, account.password)) {
      const token = jwt.sign({}, JWT_TOKEN, {
        expiresIn: '1h'
      });
      return res.status(200).json({ message: 'User registered', token });
    }
  }
  return res.status(400).json({ message: "Account doesn't exist." });
});

app.post('/register', async (req, res) => {
  const login = req.body.login;
  const password = req.body.password;

  const duplicate = await User.findOne({ login });

  if (!duplicate) {
    const hash = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ login, password: hash });
    await newUser.save();

    const token = jwt.sign({}, JWT_TOKEN, {
      expiresIn: '1h'
    });

    return res.status(200).json({ message: 'User registered.', token });
  }
  return res.status(400).json({ message: 'Login duplicated.' });
});

const start = async () => {
  await mongoose.connect('mongodb://mongo:27017');
  mongoose.set('strictQuery', false);

  app.listen(5000, () => {
    console.log(`[server]: Server is running at http://localhost:5000`);
  });
};

start();
