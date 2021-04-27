export class Attributes<T> {
  constructor(private data: T) {}

  /**
   * Get the requested property from T.data
   * @method get
   * @param {string} key
   * @return {T[K]}
   */
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  /**
   * Update a set of data
   * @method set
   * @param {T} update
   * @return void
   */
  set(value: T): void {
    Object.assign(this.data, value);
  }

  getAll(): T {
    return this.data;
  }
}
