import { Priority } from './priority.model';
import { ITask } from './task.model';
import { User } from './user.model';

export interface IClaim {
  id?: number;
  name?: string;
  description?: string;
  parent?: string;
  assigner?: number;
  teamId?: number;
  ownerFirstname?: string;
  ownerLastname?: string;
  ownerPhone?: string;
  ownerEmail?: string;
  ownerId?: number;
  deadline?: Date;
  status?: string;
  progress?: number;
  userId?: number;
  priorityId?: number;
  recieverId?: number;

  created_at?: Date;
  update_at?: Date;
  more?: string;
  appends?: Appends;
}

interface Appends {
  priority: Priority;
  owner: User;
  assigner?: User;
  tasks?: ITask[];
  subClaims?: IClaim[];
  reciever?: User;
  parent?: IClaim;
}

export class Claim implements IClaim {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public parent?: string,
    public assigner?: number,
    public teamId?: number,
    public ownerFirstname?: string,
    public ownerLastname?: string,
    public ownerPhone?: string,
    public ownerEmail?: string,
    public deadline?: Date,
    public status?: string,
    public userId?: number,
    public priorityId?: number,
    public comment?: string,
    public _method?: string,
    public created_at?: Date,
    public update_at?: Date,
    public more?: string,
    public recieverId?: number,
    public ownerId?: number
  ) {}
}
