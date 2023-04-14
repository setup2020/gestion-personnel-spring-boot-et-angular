import { IUser } from './user.model';
export interface IComment {
  comment?: string;
  created_at?: string;
  appends?: Appends;
}
interface Appends {
  user: IUser;
}
