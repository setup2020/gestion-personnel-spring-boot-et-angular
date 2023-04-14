import { Piece } from './piece.model';

export interface IMachine {
  id?: number;
  name?: string;
  description?: string;
  created_at?: Date;
  update_at?: Date;
  more?: string;
  appends?: Appends;
}

export class Machine implements IMachine {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public created_at?: Date,
    public update_at?: Date,
    public more?: string,
    public _method?: string,
    public pieceId?: number
  ) {}
}
interface Appends {
  piece?: Piece;
}
