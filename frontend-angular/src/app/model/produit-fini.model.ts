import { Piece } from './piece.model';

export interface IProduit {
  id?: number;
  name?: string;
  description?: string;
  created_at?: Date;
  update_at?: Date;
  more?: string;
  appends?: Appends;
}

export class Produit implements IProduit {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public created_at?: Date,
    public update_at?: Date,
    public more?: string,
    public pieceId?: number
  ) {}
}
interface Appends {
  piece?: Piece;
}
