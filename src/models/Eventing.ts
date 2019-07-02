type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};
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
