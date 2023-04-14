import { Impact } from './impact.model';
import { Priority } from './priority.model';
import { ITask } from './task.model';
import { User, IUser } from './user.model';

export interface IIncident {
  id?: number;
  name?: string;
  description?: string;
  created_at?: Date;
  update_at?: Date;
  more?: string;
  deadline?: Date;
  status?: string;
  appends?: Appends;
  other?: string;
  impactId?: number;
  ownerId?: number;
  name_owner?: string;
  userId?: number;
  assigner?: number;
  opened_at?: Date;
  exist_at?: Date;
  priorityId?: number;
  progress?: number;
}

interface Appends {
  impact?: Impact;
  owner?: User;
  assigner?: User;
  priority?: Priority;
  tasks?: ITask[];
  subIncidents?: IIncident[];
  taskOwner?: IUser;
}

export class Incident implements IIncident {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public created_at?: Date,
    public update_at?: Date,
    public more?: string,
    public impactId?: number,
    public ownerId?: number,
    public name_owner?: string,
    public assigner?: number,
    public opened_at?: Date,
    public exist_at?: Date,
    public priorityId?: number,
    public appends?: Appends,
    public deadline?: Date,
    public status?: string,
    public other?: string,
    public userId?: number,
    public comment?: string,
    public _method?: string,
    public taskId?: number
  ) {}
}
