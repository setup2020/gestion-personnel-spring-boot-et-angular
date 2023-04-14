import { TYPE_REP, TYPE_SOURCE } from '../util/enum';

export interface IExigence {
  id?: number;
  rep_name?: string;
  rep_source?: string;
  pf_interne?: string;
  pf_externe?: string;
  rep_type?: TYPE_REP;
  source_type?: TYPE_SOURCE;
  Owner?: string;
  dpt?: string;
  rep_article?: string;
  rep_desc?: string;
  criteria?: string;
  email?: string;
  section?: string;
  chap?: string;
  para?: string;
  sous_para?: string;
}

export class Exigence implements IExigence {
  section: any;

  constructor(
    public rep_name?: string,
    public rep_source?: string,
    public pf_interne?: string,
    public pf_externe?: string,
    public rep_type?: TYPE_REP,
    public source_type?: TYPE_SOURCE,
    public id?: number,
    public Owner?: string,
    public dpt?: string,
    public rep_article?: string,
    public rep_desc?: string,
    public criteria?: string,
    public email?: string,
    public chap?: string,
    public para?: string,
    public sous_para?: string,

    public _method?: string
  ) {}
}
