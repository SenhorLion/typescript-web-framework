interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

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
}
