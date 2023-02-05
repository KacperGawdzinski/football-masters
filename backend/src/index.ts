import express, { NextFunction, Request, Response } from 'express';
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

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-access-token'] as string;

  if (!token) {
    return res.status(403).send('A token is required for authentication');
  }
  try {
    const decoded = jwt.verify(token, JWT_TOKEN);
    res.locals.user = decoded;
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }
  return next();
};

app.post('/login', async (req, res) => {
  const login = req.body.login;
  const password = req.body.password;

  const account = await User.findOne({ login });
  if (account) {
    if (await bcrypt.compare(password, account.password)) {
      const token = jwt.sign({ user: login }, JWT_TOKEN, {
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

    const token = jwt.sign({ user: login }, JWT_TOKEN, {
      expiresIn: '1h'
    });

    return res.status(200).json({ message: 'User registered.', token });
  }
  return res.status(400).json({ message: 'Login duplicated.' });
});

app.post('/favourites', verifyToken, async (req, res) => {
  const user = res.locals.user.user;
  const id = req.body.league_id;
  await User.findOneAndUpdate(
    { login: user },
    { $addToSet: { likedLeagues: id } }
  );
  res.status(200).json({ message: 'League added' });
});

app.get('/favourites', verifyToken, async (req, res) => {
  const user = res.locals.user.user;
  const account = await User.findOne({ login: user });
  res.status(200).json({ likedLeagues: account?.likedLeagues });
});

const start = async () => {
  await mongoose.connect('mongodb://mongo:27017');
  mongoose.set('strictQuery', false);

  app.listen(5000, () => {
    console.log(`[server]: Server is running at http://localhost:5000`);
  });
};

start();
