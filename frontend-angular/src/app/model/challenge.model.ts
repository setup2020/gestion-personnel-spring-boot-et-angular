import { Exigence } from "./exigence.model";

export interface IChallenge {
  id?: number;
  name?: string;
  description?: string;
  type?: TYPE_CHALLENGE;
  facteur_positif?: string;
  facteur_negatif?: string;
  condition?: string;
  opportunite?: string;
  action?: string;
  created_at?: Date;
  update_at?: Date;
  appends?: Appends;
}

interface Appends {
  exigences?: Exigence[];
}

export class Challenge implements IChallenge {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public type?: TYPE_CHALLENGE,
    public facteur_positif?: string,
    public facteur_negatif?: string,
    public condition?: string,
    public opportunite?: string,
    public action?: string,
    public exigence?: number[],
    public created_at?: Date,
    public update_at?: Date,
    public _method?: string
  ) {}
}

export enum TYPE_CHALLENGE {
  INTERNE = 'INTERNE',
  EXTERNE = 'EXTERNE',
  ARCHIVED = 'ARCHIVED',
}
