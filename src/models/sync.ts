import axios, { AxiosResponse, AxiosPromise } from 'axios';
import { IUserProps } from './user';

interface IHasId {
  id?: number;
}

export class Sync<T extends IHasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise<T> {
    return axios.get(`${this.rootUrl}/${id}`);
  }
  save(data: T): AxiosPromise<T> {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(`${this.rootUrl}/`, data);
    }
  }
}
