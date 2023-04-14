import { Batiment } from './batiment.model';

export interface IPiece {
  id?: number;
  name?: string;
  description?: string;
  charpente?: CHARPENTE;
  floor?: FLOOR;
  longeur?: number;
  largeur?: number;
  superficie?: number;
  hauteur?: number;
  volume?: number;
  created_at?: Date;
  update_at?: Date;
  more?: string;
  appends?: Appends;
}
interface Appends {
  batiment?: Batiment;
}
export class Piece implements IPiece {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public charpente?: CHARPENTE,
    public floor?: FLOOR,
    public longeur?: number,
    public largeur?: number,
    public superficie?: number,
    public hauteur?: number,
    public volume?: number,
    public created_at?: Date,
    public update_at?: Date,
    public more?: string,
    public _method?: string,
    public batimentId?: number
  ) {}
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
