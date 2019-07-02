import { Eventing } from './Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  events: Eventing = new Eventing();

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
}
