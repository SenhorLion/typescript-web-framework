import { UserProps } from './User';
export class Attributes<T> {
  constructor(private data: T) {}
  /**
   * Get the requested property from T.data
   * @method get
   * @param {string} key
   * @return {string | number}
   */
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  /**
   * Update a property in User.data
   * @method set
   * @param {UserProps} update
   * @return void
   */
  set(update: T): void {
    Object.assign(this.data, update);
  }
}
