import { IKpi } from './kpi.model';
import { IObjective, Objective } from './objective.model';
import { Procedure } from './procedure.model';
import { User } from './user.model';

export interface IAudit {
  id?: number;
  name?: string;
  categorie?: CATEGORIE_AUDIT;
  type?: TYPE_AUDIT;
  referenciel?: string;
  periode?: PERIODE_AUDIT;
  observateur?: string;
  domaine?: string;
  jour?: BigInt;
  status?: string;
  archive?: boolean;
  appends?: Appends;
  created_at?: Date;
  update_at?: Date;
}



interface Appends {
  objectives?: Objective[];
  procedures?: Procedure[];
  auditor?: User[];
  lead_auditor?: User[];
  trainee?: User[];

}

export class Audit implements IAudit {
  constructor(
    public id?: number,
    public name?: string,
    public categorie?: CATEGORIE_AUDIT,
    public type?: TYPE_AUDIT,
    public referenciel?: string,
    public periode?: PERIODE_AUDIT,
    public lead_auditor?: number[],
    public auditor?: number[],
    public trainee?: number[],
    public observateur?: string,
    public expiration?: string,
    public domaine?: string,
    public jour?: BigInt,
    public status?: string,
    public archive?: boolean,
    public objective?: number[],
    public procedure?: number[],
    public created_at?: Date,
    public update_at?: Date,
    public _method?: string

  ){}
}

export enum TYPE_AUDIT {
  INTERNE = 'INTERNE',
  EXTERNE = 'EXTERNE',
}

export enum CATEGORIE_AUDIT {
  DOCUMENTAIRE = 'DOCUMENTAIRE',
  PRODUIT = 'PRODUIT',
  PROCESSUS = 'PROCESSUS',
  SYSTEME = 'SYSTEME',
}

export enum PERIODE_AUDIT {
  JANVIER = 'JANVIER',
  FEVRIER = 'FEVRIER',
  MARS = 'MARS',
  AVRIL = 'AVRIL',
  MAI = 'MAI',
  JUIN = 'JUIN',
  JUILLET = 'JUILLET',
  AOUT = 'AOUT',
  SEPTEMBRE = 'SEPTEMBRE',
  OCTOBRE = 'OCTOBRE',
  NOVEMBRE = 'NOVEMBRE',
  DECEMBRE = 'DECEMBRE',
}
