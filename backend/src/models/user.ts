import { Schema, model } from 'mongoose';

interface User {
  login: string;
  password: string;
  likedLeagues: number[];
}

const userSchema = new Schema<User>({
  login: { type: String, required: true },
  password: { type: String, required: true },
  likedLeagues: [Number]
});

export const User = model<User>('User', userSchema);
