import { NumberInput } from '@angular/cdk/coercion';
import { TYPE_LIST, TYPE_TARGET } from '../util/enum';
import { IComment } from './comment';
import { IKpi } from './kpi.model';
import { IObjective } from './objective.model';
import { Priority } from './priority.model';
import { IProcedure } from './procedure.model';
import { User } from './user.model';

export interface ITask {
  id?: number;
  name?: string;
  description?: string;
  tableRef?: string;
  parent?: number;
  created_at?: Date;
  deleted_at?: Date;
  archived_at?: Date;
  update_at?: Date;
  more?: string;
  tableRefId?: number;
  assigner?: number;
  internTarget?: number;
  deadline?: Date;
  suspended_at?: Date;
  state?: string;
  source?: string;
  progress?: any;
  occuperate?: number;
  link?: string;
  userId?: number;
  supervisorId?: number;
  priorityId?: number;
  type?: string;
  target?: number;
  appends?: Appends;
  report?: string;
  action?: string;
  typeList?: TYPE_LIST;
  typeTarget?: TYPE_TARGET;
  depart?: number;
  kpi?: number;
}

export interface IObjectiveKpi {
  id?: number;
  kpiId?: number;
  objectiveId?: number;
  objective?: IObjective;
  kpi?: IKpi;
  value?: {
    id?: number;
    taskId?: number;
    objectiveKpiId?: number;
    value?: number;
  };
}

export interface IProcedureKpi {
  id?: number;
  kpiId?: number;
  procedureId?: number;
  procedure?: IProcedure;
  kpi?: IKpi;
  value?: {
    id?: number;
    taskId?: number;
    procedureKpiId?: number;
    value?: number;
  };
}
interface Appends {
  priority?: Priority;
  user?: User;
  assigner?: User;
  parent?: ITask;
  subTask?: ITask[];
  comments?: IComment[];
  objectiveKpi?: IObjectiveKpi[];
  procedureKpi?: IProcedureKpi[];
}

export class Task implements ITask {
  constructor(
    public id?: number,
    public name?: string,
    public type?: string,
    public comment?: string,
    public parent?: number,
    public description?: string,
    public tableRef?: string,
    public created_at?: Date,
    public tableRefId?: number,
    public update_at?: Date,
    public assigner?: number,
    public more?: string,
    public internTarget?: number,
    public deadline?: Date,
    public state?: string,
    public source?: string,
    public progress?: number,
    public occuperate?: number,
    public link?: string,
    public userId?: number,
    public supervisorId?: number,
    public priorityId?: number,
    public _method?: string,
    public action?: string,
    public objectives?: number[],
    public procedures?: number[],
    public value?: number,
    public idProcedureOrObjective?: number,
    public report?: string,
    public assign?: any,
    public status?: string,
    public typeTarget?: TYPE_TARGET,
    public depart?: number,
    public kpi?: number
  ) {}
  public static isSubTask(tasks: ITask[]): boolean {
    if (tasks.length !== 0) {
      return true;
    }
    return false;
  }
}
