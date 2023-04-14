import { Danger } from "./danger.model";
import { Department } from "./department.model";
import { User } from "./user.model";

export interface IRisk {
  id?: number;
  name?: string;
  scenario?: string;
  type?: string;
  userId?: User;
  dpt?:Department
  potential?: string;
  RACD?: string;
  RACL?: string;
  BIA?: string;
  impact?: number;
  benefic?: number;
  occurence?: number;
  NR?: number;
  NO?: number;
  created_at?: Date;
  update_at?: Date;
  appends?: Appends;
}

interface Appends {
  dangers?: Danger[];
  userId?: User;
  dpt?:Department
}
export class Risk implements IRisk {
  constructor(
    public id?: number,
    public name?: string,
    public scenario?: string,
    public type?: string,
    public userId?: User,
    public dpt?:Department,
    public potential?: string,
    public RACD?: string,
    public RACL?: string,
    public BIA?: string,
    public impact?: number,
    public benefic?: number,
    public occurence?: number,
    public NR?: number,
    public NO?: number,
    public danger?: number[],
    public created_at?: Date,
    public update_at?: Date,
    public _method?: string
  ) {}
}
