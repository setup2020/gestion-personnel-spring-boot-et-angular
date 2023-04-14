import { INorme } from 'src/app/model/norme.model';
import { IVisibility } from './document';
import { IDepartment } from './department.model';
import { Input } from './input.model';
import { Kpi } from './kpi.model';
import { Norme } from './norme.model';
import { Output } from './output.model';
import { Resource } from './resource.model';
import { IRole } from './role.model';
import { ITeam } from './team.model';
import { IUser, User } from './user.model';

export interface IProcedure {
  id?: number;
  norme?: string;
  owner?: number;
  name?: string;
  objective?: string;
  description?: string;
  method?: string;
  trigger?: string;
  reference?: string;
  signed_by?: string;
  participants?: string;
  category?: string;
  animations?: string;
  departId?: string;
  valid?: string;
  version?: string;
  parent?: number;
  link?: string;
  userId?: number;
  created_at?: Date;
  update_at?: Date;
  appends?: Appends;
  type?: string;
  group?: string;
}

interface Appends {
  owner?: User;
  kpis?: Kpi[];
  normes?: Norme[];
  inputs?: Input[];
  outputs?: Output[];
  resources?: Resource[];
  parent?: Procedure;
  roles?: IRole[];
  visibilities?: {
    write: number;
    read?: number;
    download?: number;
    role: IRole;
    department: IDepartment;
  }[];
  teams?: ITeam[];
  link?: string;
  isParent?: boolean;
  children?: { child: IProcedure; visibilities: IVisibility[] }[];
}

export class Procedure implements IProcedure {
  constructor(
    public id?: number,
    public norme?: string,
    public name?: string,
    public owner?: number,
    public objective?: string,
    public description?: string,
    public criticalFactory?: string,
    public parent?: number,
    public userId?: number,
    public computerSupport?: string,
    public link?: string,
    public inputs?: number[],
    public ouputs?: number[],
    public normes?: number[],

    public created_at?: Date,
    public update_at?: Date
  ) {}
}
