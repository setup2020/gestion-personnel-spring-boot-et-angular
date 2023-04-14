export interface ISection {
  id?: number;
  name?: string;
  description?: string;
  niveauId?: number;
  created_at?: Date;
  update_at?: Date;
  more?: string;
}

export class Section implements ISection {
  constructor(
    public id?: number,
    public name?: string,
    public niveauId?: number,
    public description?: string,
    public created_at?: Date,
    public update_at?: Date,
    public more?: string
  ) {
  }
}
