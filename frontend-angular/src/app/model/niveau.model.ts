import { Branch, IBranch } from './branch.model';
import { ISupervisorNiveau } from './supervisor_niveau.model';

export interface INiveau {
  id?: number;
  name?: string;
  description?: string;
  level?: number;
  created_at?: Date;
  update_at?: Date;
  code?: string;
  nameBranch?: string;
  appends?: IAppends;
  branchs?: IBranch;
}

interface IAppends {
  branchs: IBranch[];
}
export class Niveau implements INiveau {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public created_at?: Date,
    public update_at?: Date,
    public level?: number,
    public code?: string,
    public nameBranch?: string,
    public branchs?: IBranch,
    public appends?: IAppends
  ) {}

  static getLevel(level: any): number {
    return parseInt(level);
  }
}
