import { Piece } from 'src/app/model/piece.model';

export interface IEquipement {
  id?: number;
  name?: string;
  description?: string;
  created_at?: Date;
  update_at?: Date;
  more?: string;
  appends?: Appends;
}

interface Appends {
  piece?: Piece;
}
export class Equipement implements IEquipement {
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
