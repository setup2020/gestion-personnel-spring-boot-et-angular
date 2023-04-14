import { Role } from './role.model';

export interface ISupervisor {
  id?: number;
  name?: string;
  description?: string;
  levelId?: number;
  departmentId?: number;
  teamId?: number;
  top?: string;
  manager?: string;
  created_at?: Date;
  update_at?: Date;
  appends?: IAppends;
  isTop?: number;
  read?: number;
  write?: number;
}

export interface IAppends {
  role?: Role;
}

export class Supervisor implements ISupervisor {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public created_at?: Date,
    public departmentId?: number,
    public teamId?: number,
    public top?: string,
    public manager?: string,
    public update_at?: Date,
    public levelId?: number,
    public _method?: string,
    public isTop?: number
  ) {}
}
