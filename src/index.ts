import axios from 'axios';
import { User } from './models/User';

// testing user creation and saving
const user = new User({ id: 3 });

// test updating existing user
// user.set({ name: 'Lorem ipsom', age: 404 });
// user.save();
user.fetch();

console.log({ user });
// test saving a new (non existing) user
const newUser = new User({ name: 'A New record', age: 33 });
newUser.save();
newUser.fetch();

console.log({ newUser });
