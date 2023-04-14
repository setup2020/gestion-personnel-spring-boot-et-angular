import {ISection} from './section.model';

export interface ISupervisorNiveau {
  id?: number;
  name?: string;
  description?: string;
  levelId?: number;
  userId?: number;
  type?: string;
  created_at?: Date;
  update_at?: Date;
  section?: ISection;
}

export class SupervisorNiveau implements ISupervisorNiveau {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public created_at?: Date,
    public update_at?: Date,
    public levelId?: number,
    public type?: string,
    public userId?: number,
    public section?: ISection
  ) {
  }
}
