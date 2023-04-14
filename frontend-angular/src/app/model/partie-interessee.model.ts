import { Exigence } from "./exigence.model";
import { Challenge } from "./challenge.model";

export interface IPartieInteressee {
  id?: number;
  name?: string;
  description?: string;
  group?: GROUP;
  sub_group?: SUB_GROUP,
  type_sub_group?: string,
  localisation?: string,
  spoc_name?: string,
  spoc_email?: string,
  spoc_tel?: string,
  besoin?: string;
  influence?: INFLUENCE;
  created_at?: Date;
  update_at?: Date;
  appends?: Appends;
  more?: string;
}

interface Appends {
  exigences?: Exigence[];
  challenges?: Challenge[];
}

export class PartieInteressee implements IPartieInteressee {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public group?: GROUP,
    public sub_group?: SUB_GROUP,
    public type_sub_group?: string,
    public localisation?: string,
    public spoc_name?: string,
    public spoc_email?: string,
    public spoc_tel?: string,
    public besoin?: string,
    public influence?: INFLUENCE,
    public exigence?: number[],
    public challenge?: number[],
    public created_at?: Date,
    public update_at?: Date,
    public _method?: string
  ) {}
}

export enum INFLUENCE {
  HIGH = 'HIGH',
  MIDDLE = 'MIDDLE',
  LOW = 'LOW',
}

export enum GROUP {
  PARTNER = 'PARTNER',
  SUPPLIER = 'SUPPLIER',
  SHAREHOLDER = 'SHAREHOLDER',
  CUSTOMER = 'CUSTOMER',
}

export enum SUB_GROUP {
  STATE_STRUCTURE = 'STATE_STRUCTURE',
  PUBLIC_INSTITUTIONS = 'PUBLIC_INSTITUTIONS',
  TRADE_UNION_AND_CONSULAR_CHAMBER = 'TRADE_UNION_AND_CONSULAR_CHAMBER',
  BANKS_AND_MICROFINANCE = 'BANKS_AND_MICROFINANCE',
  UNIVERSITIES_AND_RESEACH_CENTER = 'UNIVERSITIES_AND_RESEACH_CENTER',
  DONORS_AND_COOPERATION = 'DONORS_AND_COOPERATION',
  PRIVATE_COMPANIES = 'PRIVATE_COMPANIES',
}
