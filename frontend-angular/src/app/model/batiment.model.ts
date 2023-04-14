import { Walls } from "./wall.model";

export interface IBatiment {
  id?: number;
  name?: string;
  classe?: CLASSE;
  groupe?: GROUPE;
  niveau?: string;
  roofs?: ROOFS;
  charpente?: CHARPENTE;
  floor?: FLOOR;
  longeur?: number;
  largeur?: number;
  description?: string;
  superficie?: number;
  hauteur?: number;
  volume?: number;
  appends?: Appends;
  created_at?: Date;
  update_at?: Date;
  more?: string;
}

interface Appends {
  walls?: Walls[];
}
export class Batiment implements IBatiment {
  constructor(
    public id?: number,
    public name?: string,
    public classe?: CLASSE,
    public groupe?: GROUPE,
    public niveau?: string,
    public roofs?: ROOFS,
    public charpente?: CHARPENTE,
    public floor?: FLOOR,
    public longeur?: number,
    public largeur?: number,
    public description?: string,
    public superficie?: number,
    public hauteur?: number,
    public volume?: number,
    public reated_at?: Date,
    public update_at?: Date,
    public more?: string,
    public _method?: string,
    public walls?: number[],
  ) {}
}

export enum CLASSE {
  HABITATION = 'HABITATION',
  COMMERCIALE = 'COMMERCIALE',
  MIXTE = 'MIXTE',
  INDUSTRIEL = 'INDUSTRIEL',
}
export enum GROUPE {
  MAISON_PLEIN_PIED = 'MAISON PLEIN PIED',
  MAISON_A_NIVEAUX = 'MAISON A NIVEAUX',
}
export enum NIVEAUX {
  R0 = 'R0',  R1 = 'R1',
  R2 = 'R2', R3 = 'R3',
  R4 = 'R4',  R5 = 'R5',
}
export enum ROOFS {
  TOITURE_CINTREE_BERCEAU = 'TOITURE CINTREE EN BERCEAU',
  TOITURE_A_3_PANS = 'TOITURE à 3 PANS',
  TOITURE_A_4_PANS = 'TOITURE à 4 PANS',
  TOITURE_CINTREE_SIMPLE_COURBURE = 'TOITURE CINTREE à SIMPLE COURBURE CONCAVE',
  TOITURE_A_DEMI = 'TOITURE à DEMI CROUTE',
  TOIT_TERASSE = 'TOIT_TERASSE',
  TOITURE_L = 'TOITURE EN L',
  TOITURE_2_PANS = 'TOITURE EN 2 PANS',
  TOITURE_T = 'TOITURE EN T',
  TOITURE_DOUBLE_COURBURE = 'TOITURE EN DOUBLE COURBURE',
  TOIT_MONOPENTE = 'TOIT MONOPENTE',
  TOITURE_DENT_SCIE = 'TOITURE EN DENT DE SCIE',
  TOITURE_COYERS = 'TOITURE à COYERS OU COYAUX',
  TOURELLE_CONIQUE = 'TOURELLE CONIQUE A BASE CIRCULAIRE',
  TOURELLE_PANS = 'TOURELLE A PANS A BASE HEXAGONNALE',
  TOITURE_DOME = 'TOITURE EN DOME OU COUPOLE',
}
export enum CHARPENTE {
  BOIS = 'BOIS',
  METAL = 'METAL',
  BETON = 'BETON',
}
export enum FLOOR {
  PARQUET = 'PARQUET',
  STRATIFIE = 'STRATIFIE',
  PAVES = 'PAVES',
  CARREAUX = 'CARREAUX',
  MOQUETTES = 'MOQUETTES',
  TERRE_BATTUE = 'TERRE BATTUE',
}


