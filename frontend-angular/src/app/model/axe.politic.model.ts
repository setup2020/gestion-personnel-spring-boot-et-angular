import { Challenge } from "./challenge.model";
import { Exigence } from "./exigence.model";
import { PartieInteressee } from "./partie-interessee.model";

export interface IAxePolitic {
  id?: number;
  name?: string;
  description?: string;
  created_at?: Date;
  update_at?: Date;
  more?: string;
  appends?: Appends;
}

interface Appends {
  exigences?: Exigence[];
  challenges?: Challenge[];
  parties?: PartieInteressee[];
}

export class AxePolitic implements IAxePolitic {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public created_at?: Date,
    public update_at?: Date,
    public more?: string,
    public exigence?: number[],
    public challenge?: number[],
    public partie?: number[],
    public _method?: string
  ) {}
}

export enum TYPE_AXE {
  EXIGENCE_LEGALE = 'EXIGENCE_LEGALE',
  EXIGENCE_INTERNE = 'EXIGENCE_INTERNE',
  EXIGENCE_REGLEMENTAIRE = 'EXIGENCE_REGLEMENTAIRE',
  EXIGENCE_CLIENT = 'EXIGENCE_CLIENT',
}
