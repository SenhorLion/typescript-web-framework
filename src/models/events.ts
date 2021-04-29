export type Callback = () => void;

export class EventListener {
  events: { [key: string]: Callback[] } = {};

  /**
   * Register an event with its callback function
   * @method on
   * @param {String} eventName
   * @param {Callback} callback
   */
  on = (eventName: string, callback: Callback) => {
    const handlers = this.events[eventName] || [];

    handlers.push(callback);

    this.events[eventName] = handlers;
  };

  /**
   * Trigger the event for eventName if found
   * @method trigger
   * @param {string} eventName
   * @return void
   */
  trigger = (eventName: string) => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      console.warn(`Event ${eventName} not found to trigger`);
      return;
    }

    handlers.forEach((callback) => callback());
  };
}
