import { Piece } from './piece.model';

export interface IMatiere {
  id?: number;
  name?: string;
  description?: string;
  created_at?: Date;
  update_at?: Date;
  more?: string;
  appends?: Appends;
}

export class Matiere implements IMatiere {
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
