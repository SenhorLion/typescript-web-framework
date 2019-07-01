import axios, { AxiosResponse } from 'axios';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

const SERVER_API: string = 'http://localhost:3000';
const ENDPOINT = {
  USERS: 'users',
};

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  /**
   * Get the requested property from User.data
   * @method get
   * @param {string} propName
   * @return {string | number}
   */
  get(propName: string): number | string {
    return this.data[propName];
  }

  /**
   * Update a property in User.data
   * @method set
   * @param {UserProps} update
   * @return void
   */
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  /**
   * Register an event with its callback function
   * @method on
   * @param {String} eventName
   * @param {Callback} callback
   */
  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];

    handlers.push(callback);

    this.events[eventName] = handlers;
  }

  /**
   * Trigger the eventName invoked
   * @method trigger
   * @param {string} eventName
   * @return void
   */
  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return; // no eventname found, get outa here...
    }

    handlers.forEach(callback => callback());
  }

  // TODO: User::fetch - return Promise object
  fetch(): void {
    axios.get(`${SERVER_API}/${ENDPOINT.USERS}/${this.get('id')}`).then(
      (response: AxiosResponse): void => {
        console.log('User is', response.data);

        this.set(response.data);
      },
    );
  }

  save(): void {
    const id = this.get('id');

    if (id) {
      console.log('save with id');
      // put
      // axios.put(`http://localhost:3000/users/${id}`, this.data);
      axios.put(`${SERVER_API}/${ENDPOINT.USERS}/${id}`, this.data);
    } else {
      //post
      console.log('save new record');
      axios.post(`${SERVER_API}/${ENDPOINT.USERS}`, this.data);
    }
  }
}
