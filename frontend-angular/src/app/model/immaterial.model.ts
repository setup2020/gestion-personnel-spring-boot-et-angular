export interface IImaterial {
  id?: number;
  name?: string;
  description?: string;
  type?: TYPE;
  fournisseur?: string

}

export class Imaterial implements IImaterial {
  section: any;

  constructor(
    public id?: number,
    public name?: string,
    public rep_source?: string,
    public description?: string,
    public type?: TYPE,
    public fournisseur?: string,

    public _method?: string
  ) {}
}

export enum TYPE {
  AUTEUR = 'DROIT AUTEUR',
  LICENCE = 'LICENCE',
  SERVICE_PRESTATION = 'SERVICE PRESTATION',
  BREVET = 'BREVET',
  LOGICIEL = 'LOGICIEL'
}
