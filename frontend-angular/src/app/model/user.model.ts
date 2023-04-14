import { IDepartment } from './department.model';
import { Post } from './post.model';
import { IRole } from './role.model';
import { ISupervisor, Supervisor } from './supervisor.model';

export interface IUser {
  firstname?: string;
  id?: number;
  lastname?: string;
  address?: string;
  phone?: string;
  email?: string;
  skype?: string;
  teamViewer?: string;
  whatsapp?: string;
  chiefOfffier?: string;
  status?: string;
  auditor_type?: string;
  auditor_organisme?: string;
  auditor_categorie?: string;
  auditor_standart?: string;
  auditor_scopeEA?: string;
  auditor_doc?: string;
  auditor_deadline?: string;
  is_auditor?: boolean;
  has_job_description?: boolean;
  mission?: string;
  profil?: string;
  equipe?: string;
  connaissance_marche?: string;
  connaissance_metier?: string;
  connaissance_milieu?: string;
  connaissance_methode?: string;
  connaissance_generale?: string;
  experience_marche?: string;
  experience_metier?: string;
  experience_milieu?: string;
  experience_methode?: string;
  experience_generale?: string;
  acculturation?: string;
  courtoisie?: string;
  relationnel?: string;
  integration?: string;
  sociabilisation?: string;
  resilience?: string;
  initiative?: string;
  critique?: string;
  professionalisme?: string;
  emotions?: string;
  coordination?: string;
  gestion_equipe?: string;
  decision?: string;
  responsabilite?: string;
  procedure?: string;
  exigence?: string;
  normes?: string;
  morale?: string;
  ethique?: string;
  created_at?: Date;
  update_at?: Date;
  more?: string;
  appends?: IAppends;
  fullName?: string;
  rId?: ISupervisor;
  
}


export interface IAppends {
  roles: Supervisor[];
  departments: IDepartment[];
  top?: number;
  code?: any;
  posts?: Post[];
}

export class User implements IUser {
  constructor(
    public id?: number,
    public lastname?: string,
    public firstname?: string,
    public address?: string,
    public phone?: string,
    public email?: string,
    public skype?: string,
    public teamViewer?: string,
    public whatsapp?: string,
    public chiefOfffier?: string,
    public status?: string,
    public auditor_type?: string,
    public auditor_organisme?: string,
    public auditor_categorie?: string,
    public auditor_standart?: string,
    public auditor_scopeEA?: string,
    public auditor_doc?: string,
    public auditor_deadline?: string,
    public is_auditor?: boolean,

    public has_job_description?:boolean,
    public mission?: string,
    public profil?: string,
    public equipe?: string,
    public connaissance_marche?: string,
    public connaissance_metier?: string,
    public connaissance_milieu?: string,
    public connaissance_methode?: string,
    public connaissance_generale?: string,
    public experience_marche?: string,
    public experience_metier?: string,
    public experience_milieu?: string,
    public experience_methode?: string,
    public experience_generale?: string,
    public acculturation?: string,
    public courtoisie?: string,
    public relationnel?: string,
    public integration?: string,
    public sociabilisation?: string,
    public resilience?: string,
    public initiative?: string,
    public critique?: string,
    public professionalisme?: string,
    public emotions?: string,
    public coordination?: string,
    public gestion_equipe?: string,
    public decision?: string,
    public responsabilite?: string,
    public procedure?: string,
    public exigence?: string,
    public normes?: string,
    public morale?: string,
    public description?: string,
    public ethique?: string,
    public created_at?: Date,
    public update_at?: Date,
    public more?: string,
    public _method?: string,
    public roles?: any,
    public rId?: ISupervisor,
    public appends?: IAppends,
    public fullName?: string,
    public post?: number[]
  ) {}
}
