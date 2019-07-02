import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { BASE_API, ENDPOINT } from '../config';
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const apiUserEndpoint = `${BASE_API}/${ENDPOINT.USERS}`;

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(apiUserEndpoint);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
}
