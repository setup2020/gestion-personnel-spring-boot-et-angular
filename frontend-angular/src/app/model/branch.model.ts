export interface IBranch {
  id?: number;
  name?: string;
  description?: string;
  status?: string;
  created_at?: Date;
  update_at?: Date;
}

export class Branch implements IBranch {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public status?: string,
    public created_at?: Date,
    public update_at?: Date
  ) {}
}
