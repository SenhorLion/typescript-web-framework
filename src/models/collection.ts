import { EventListener } from './events';
import axios, { AxiosResponse } from 'axios';

export class Collection<TType, KData> {
  models: TType[] = [];
  events: EventListener = new EventListener();

  constructor(public rootUrl: string, public deserialize: (json: KData) => TType) {}

  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get('http://localhost:3000/users').then((res: AxiosResponse) => {
      // console.log('RES', res);

      res?.data?.forEach((value: KData) => {
        // const user = User.buildUser(value);

        this.models.push(this.deserialize(value));
      });

      this.trigger('change');
    });
  }
}
