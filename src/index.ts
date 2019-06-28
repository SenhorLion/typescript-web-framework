import { User } from './models/User';

const user = new User({ name: 'Ziggy', age: 42 });

console.log(`User name: ${user.get('name')}`);
console.log(`User age: ${user.get('age')}`);

user.set({ name: 'Zowy' });

console.log(`User name: ${user.get('name')}`);
console.log(`User age: ${user.get('age')}`);
