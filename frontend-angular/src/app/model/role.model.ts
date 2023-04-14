import { ILevel } from './level.model';

export interface IRole {
  id?: number;
  name?: string;
  nameLevel?: string;
  departmentId?: number;
  level?: number;
  levelId?: number;
  description?: string;
  code?: string;
  created_at?: Date;
  update_at?: Date;
  appends?: IAppends;
  pivot?: IPivot;
}

interface IPivot {
  procedureId?: number;
  roleId?: number;
  read?: number;
  id?: number;
  download?: number;
}
interface IAppends {
  level: ILevel;
  child: {
    roleId: number;
    levelId: number;
    nameLevel: string;
    nameRole: string;
  };
  listLevel: ILevel[];
}

export class Role implements IRole {
  constructor(
    public id?: number,
    public name?: string,
    public nameLevel?: string,
    public level?: number,
    public description?: string,
    public created_at?: Date,
    public update_at?: Date,
    public code?: string,
    public appends?: IAppends
  ) {}
}
