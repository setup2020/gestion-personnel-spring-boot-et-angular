import {
  TYPE_DANGER,
  DANGER_MECA_ET_PHY,
  DANGER_ELECTRIQUE,
  SUBSTANCE_DANGEREUSE,
  DANGER_BIOLOIQUE,
  DANGER_CHIMIQUE,
  DANGER_THERMIQUE,
  DANGER_INCENDIE_ET_EXPLOSION,
  DANGER_PROCEDURAL,
  DANGER_PSYCHOLOGIQUE,
  DANGER_ENVIRONNEMENT_TRAVAIL,
  DANGER_FACTEUR_HUMAIN,
  DANGER_AGENT_PHYSIQUE_SPECIFIQUES,
  DANGER_CYBERCRIMINALITE,
  DANGER_ENVIRONNEMENT,
  REGIME_DE_TENSION,
  TYPE_DE_COURANT,
  GAZ,
  TRAVAIL,
} from '../util/enum';

export interface IDanger {
  id?: number;
  name_danger?: string;
  description_danger?: string;
  classe?: string;
  categorie?: string;
  cause_danger?: string;
  consequence_danger?: string;
  type?: TYPE_DANGER;
  danger_meca_phy?: DANGER_MECA_ET_PHY;
  danger_elec?: DANGER_ELECTRIQUE;
  substance?: SUBSTANCE_DANGEREUSE;
  danger_bio?: DANGER_BIOLOIQUE;
  danger_chim?: DANGER_CHIMIQUE;
  danger_ther?: DANGER_THERMIQUE;
  danger_inc_exp?: DANGER_INCENDIE_ET_EXPLOSION;
  danger_prod?: DANGER_PROCEDURAL;
  danger_psy?: DANGER_PSYCHOLOGIQUE;
  danger_env_tra?: DANGER_ENVIRONNEMENT_TRAVAIL;
  danger_fac_hum?: DANGER_FACTEUR_HUMAIN;
  danger_agen_phy?: DANGER_AGENT_PHYSIQUE_SPECIFIQUES;
  danger_cyb?: DANGER_CYBERCRIMINALITE;
  danger_env?: DANGER_ENVIRONNEMENT;
  regime_ten?: REGIME_DE_TENSION;
  type_courant?: TYPE_DE_COURANT;
  tableau?: string;
  gaz?: GAZ;
  travail?: TRAVAIL;
  vulnerability?: string;
}

export class Danger implements IDanger {
  section: any;

  constructor(
    public id?: number,
    public name_danger?: string,
    public description_danger?: string,
    public type?: TYPE_DANGER,
    public classe?: string,
    public categorie?: string,
    public cause_danger?: string,
    public consequence_danger?: string,
    public danger_meca_phy?: DANGER_MECA_ET_PHY,
    public danger_elec?: DANGER_ELECTRIQUE,
    public substance?: SUBSTANCE_DANGEREUSE,
    public danger_bio?: DANGER_BIOLOIQUE,
    public danger_chim?: DANGER_CHIMIQUE,
    public danger_ther?: DANGER_THERMIQUE,
    public danger_inc_exp?: DANGER_INCENDIE_ET_EXPLOSION,
    public danger_prod?: DANGER_PROCEDURAL,
    public danger_psy?: DANGER_PSYCHOLOGIQUE,
    public danger_env_tra?: DANGER_ENVIRONNEMENT_TRAVAIL,
    public danger_fac_hum?: DANGER_FACTEUR_HUMAIN,
    public danger_agen_phy?: DANGER_AGENT_PHYSIQUE_SPECIFIQUES,
    public danger_cyb?: DANGER_CYBERCRIMINALITE,
    public danger_env?: DANGER_ENVIRONNEMENT,
    public regime_ten?: REGIME_DE_TENSION,
    public type_courant?: TYPE_DE_COURANT,
    public tableau?: string,
    public gaz?: GAZ,
    public travail?: TRAVAIL,
    public vulnerability?: string,

    public _method?: string
  ) {}
}
