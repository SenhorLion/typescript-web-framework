import { IUserProps } from './user';
import { Collection } from './collection';
import { EventListener } from './events';
import { Sync } from './sync';
import { Model } from './model';
import { Attributes } from './attributes';

export interface IUserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<IUserProps> {
  static buildUser(attrs: IUserProps): User {
    return new User(new Attributes<IUserProps>(attrs), new EventListener(), new Sync<IUserProps>(rootUrl));
  }

  static buildUserCollection(): Collection<User, IUserProps> {
    return new Collection<User, IUserProps>(rootUrl, (json: IUserProps) => User.buildUser(json));
  }
}
