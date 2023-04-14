import { IRole } from './role.model';
import { ISupervisor } from './supervisor.model';
import { ITeam } from './team.model';
import { IUser } from './user.model';

export interface IDepartment {
  id?: number;
  name?: string;
  description?: string;
  created_at?: Date;
  update_at?: Date;
  appends?: IAppends;
  pivot?: IPivot;
}
interface IPivot {
  procedureId?: number;
  departmentId?: number;
  read?: number;
  id?: number;
  download?: number;
}
export interface IAppends {
  teams?: ITeam[];
  managers?: IUser[];
  supervisors?: ISupervisor[];
  roles?: IRole[];
}

export class Department implements IDepartment {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public _method?: string,
    public created_at?: Date,
    public update_at?: Date
  ) {}
}
