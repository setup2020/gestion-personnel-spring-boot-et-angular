import { Priority } from './priority.model';
import { ITask } from './task.model';
import { User } from './user.model';

export interface ISuggestion {
  id?: number;
  email_owner?: string;
  name?: string;
  assigner?: number;
  name_owner?: string;
  description?: string;
  parent?: number;
  userId?: number;
  priorityId?: number;
  ownerId?: number;
  deadline?: Date;
  status?: string;
  advantage?: string;
  created_at?: Date;
  update_at?: Date;
  appends?: Appends;
  progress?: number;
}
interface Appends {
  priority: Priority;
  user?: User;
  owner?: User;
  tasks?: ITask[];
  assigner?: User;
  subSuggestions?: ISuggestion[];
  parent?: ISuggestion;
}
export class Suggestion implements ISuggestion {
  constructor(
    public id?: number,
    public email_owner?: string,
    public assigner?: number,
    public name_owner?: string,
    public name?: string,
    public description?: string,
    public parent?: number,
    public userId?: number,
    public ownerId?: number,
    public priorityId?: number,
    public deadline?: Date,
    public status?: string,
    public advantage?: string,
    public created_at?: Date,
    public update_at?: Date,
    public appends?: Appends,
    public comment?: string,
    public _method?: string
  ) {}
}
