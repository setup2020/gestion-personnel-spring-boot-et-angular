export interface IAuditeur {
  id?: number;
  userId?: number;
  userDep?: string;
  type?: TYPE_AUDITEUR;
  name?: string;
  organisme?: string;
  categorie?: CATEGORIE_AUDITEUR;
  standart?: string;
  scope?: string;
  expiration?: Date;
  created_at?: Date;
  update_at?: Date;
}

export class Auditeur implements IAuditeur {
  constructor(
    public id?: number,
    public userId?: number,
    public userDep?: string,
    public type?: TYPE_AUDITEUR,
    public name?: string,
    public organisme?: string,
    public categorie?: CATEGORIE_AUDITEUR,
    public standart?: string,
    public scope?: string,
    public document?: string,
    public expiration?: Date,
    public created_at?: Date,
    public update_at?: Date,
    public _method?: string

  ){}

}

export enum TYPE_AUDITEUR {
  INTERNE = 'INTERNE',
  EXTERNE = 'EXTERNE',
}

export enum CATEGORIE_AUDITEUR {
  AUDITEUR = 'AUDITEUR',
  LEAD_AUDITEUR = 'LEAD AUDITEUR',
  TRAINEE = 'TRAINEE',

}
