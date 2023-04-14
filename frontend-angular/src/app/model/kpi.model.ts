export interface IKpi {
  id?: number;
  name?: string;
  description?: string;
  unit?: TYPE_UNIT;
  target?: number;
  created_at?: Date;
  update_at?: Date;
  type?: TYPE_KPI;
}

export class Kpi implements IKpi {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public type?: TYPE_KPI,
    public created_at?: Date,
    public update_at?: Date,
    public target?: number,
    public unit?: TYPE_UNIT,
    public _method?: string
  ) {}
}

export enum TYPE_UNIT {
  NUMBER = 'NUMBER',
  PERCENT = 'PERCENT',
  COST = 'COST',
  TIME = 'TIME',
}

export enum TYPE_KPI {
  PROCESS = 'PROCESS',
  OBJECTIVE = 'OBJECTIVE',
}
