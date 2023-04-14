import { TYPE_LOCALISATION, TYPE_NORME } from '../util/enum';

export interface INorme {
  id?: number;
  name?: string;
  description?: string;
  type?: TYPE_NORME;
  localisation?: TYPE_LOCALISATION;
  reference?: string;
  famille?: string;
  domaine?: string;
  organisme?: string;
  pays?: string;
  created_at?: Date;
  update_at?: Date;
  more?: string;
}

export class Norme implements INorme {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public type?: TYPE_NORME,
    public localisation?: TYPE_LOCALISATION,
    public reference?: string,
    public famille?: string,
    public domaine?: string,
    public organisme?: string,
    public pays?: string,
    public created_at?: Date,
    public update_at?: Date,
    public more?: string,
    public _method?: string
  ) {}
}
