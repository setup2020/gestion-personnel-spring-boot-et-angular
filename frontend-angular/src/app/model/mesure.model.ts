import { Risk } from "./risk.model";

export interface IMesure {
  id?: number;
  type?: string;
  name?: string;
  description?: string;
  deadline?: string;
  statut?: string;
  RA?: string;
  impact?: number;
  IR?: number;
  occurence?: number;
  OR?: number;
  NRR?: number;
  RO?: number; //resultat obtenu
  benefic?: number;
  BR?: number;
  NOR?: number;
  risk?:Risk;
  appends?: Appends;
  created_at?: Date;
  update_at?: Date;
}

interface Appends {
  risks?:Risk;
}

export class Mesure implements IMesure {
  constructor(
    public id?: number,
    public name?: string,
    public type?: string,
    public description?: string,
    public deadline?: string,
    public statut?: string,
    public RA?: string,
    public IR?: number,
    public OR?: number,
    public NRR?: number,
    public RO?: number,
    public BR?: number,
    public NOR?: number,
    public impact?: number,
    public benefic?: number,
    public occurence?: number,
    public NR?: number,
    public NO?: number,
    public risk?: Risk,
    public created_at?: Date,
    public update_at?: Date,
    public _method?: string
  ) {}
}
