import { IKitchenUser } from './providers';
import { User } from '../users/models/user';

export interface Kitchen {
  id: number;
  user: IKitchenUser;
  name: string;
  workdays: any[];
  image: any;
  menu: any;
  featured: boolean;
}

export class kitchen {
  user: any = new User();
  name: string = '';
  workingdays = [''];
  menu: any;
  featured: boolean = false;
}
