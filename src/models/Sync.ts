import axios, { AxiosResponse, AxiosPromise } from 'axios';

// TODO: Sync
// Convert into a Generic class
interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(public apiEndpoint: string) {}
  /**
   * Return a Promise for the id at the apiEndpoint requested
   * @method fetch
   * @param {number} id
   * @return AxiosPromise
   */
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.apiEndpoint}/${'id'}`);
  }

  /**
   * Save updates to User
   * - If user exists, update with PUT
   * - If a new User, create with POST
   *
   * @method save
   * @param {T} data
   * @return void
   */
  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.apiEndpoint}/${id}`, data);
    } else {
      return axios.post(`${this.apiEndpoint}`, data);
    }
  }
}
