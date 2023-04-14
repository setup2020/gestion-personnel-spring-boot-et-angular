import { AxePolitic } from './axe.politic.model';
import { Department } from './department.model';
import { Kpi } from './kpi.model';

export interface IObjective {
  id?: number;
  name?: string;
  description?: string;
  created_at?: Date;
  update_at?: Date;
  appends?: Appends;
}

interface Appends {
  axes?: AxePolitic[]; 
  kpis?: Kpi[];
  departments?: Department[];
}

export class Objective implements IObjective {
  constructor(
    public _method?: string,
    public id?: number,
    public name?: string,
    public description?: string,
    public created_at?: Date,
    public update_at?: Date,
    public axe?: number[],
    public department?: [],
    public kpi?: number[]
  ) {}
}
