import { User } from './models/User';

const user = new User({ name: 'Ziggy', age: 42 });

user.on('change', () => console.log('change callbacked'));
user.on('click', () => console.log('clicked callbacked'));
user.on('click', () => console.log('clicked again callbacked'));

console.log({ user });

user.trigger('click');
user.trigger('change');
user.trigger('chalwnjlbnewjlfbnerwjlbnge');
