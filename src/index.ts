import { Collection } from './models/collection';
import axios, { AxiosResponse } from 'axios';
import { User, IUserProps } from './models/user';

console.log('YO!');

// axios.get('http://localhost:3000/users/3');

// const user = new User({ name: 'Zorro', age: 7 });

// const user = User.buildUser({ id: 13, name: 'IAM THIRTEEN ONE', age: 21 });

// console.log('USER', user);
// user.set({ name: 'I AM ONE' });
// user.save();
// user.on('save', () => console.log('Saved User', user));
// user.get('id');
// user.save();

// setTimeout(() => {
//   user.fetch();
//   // console.log({ user });
// }, 2000);

// axios.get('http://localhost:3000/users').then((res: AxiosResponse) => console.log('@res', res.data));
const userCollection = User.buildUserCollection();

userCollection.on('change', () => console.log('USERS UPDATED', userCollection));

userCollection.fetch();
