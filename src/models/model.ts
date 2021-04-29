import { AxiosPromise, AxiosResponse } from 'axios';

interface IModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(value: T): void;
  getAll(): T;
}

interface ISync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface IEvents {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface IHasId {
  id?: number;
}

export class Model<T extends IHasId> {
  constructor(private attributes: IModelAttributes<T>, private events: IEvents, private sync: ISync<T>) {}

  // get on() {
  //   return this.events.on;
  // }

  on = this.events.on;

  /**
   * Trigger the event for eventName if found
   * @method trigger
   * @param {string} eventName
   * @return void
   */
  // trigger(eventName: string) {
  //   this.events.trigger(eventName);
  // }
  // get trigger() {
  //   return this.events.trigger;
  // }
  trigger = this.events.trigger;

  // get get() {
  //   return this.attributes.get;
  // }
  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('update');
  }

  fetch(): void {
    console.log('@FETCH ');

    const id = this.get('id');
    // const id = this.attributes.get('id');

    // NB: this.get('id') doesnt work here? Dont know why??
    // so we have to use the attributes.get method directly

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without a valid id');
    }

    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((res: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}
