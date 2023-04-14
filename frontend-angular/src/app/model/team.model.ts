import { Department } from './department.model';
import { IUser } from './user.model';

export interface ITeam {
  id?: number;
  name?: string;
  description?: string;
  created_at?: Date;
  update_at?: Date;
  more?: string;
  departmentId?: number;
  appends?: appends;
  pivot?: IPivot;
}
interface appends {
  department?: Department;
  supervisors?: IUser[];
}
interface IPivot {
  procedureId?: number;
  teamId?: number;
  read?: number;
  id?: number;
  download?: number;
}
export class Team implements ITeam {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public created_at?: Date,
    public update_at?: Date,
    public more?: string,
    public departmentId?: number,
    public appends?: appends,
    public _method?: string
  ) {}
}
