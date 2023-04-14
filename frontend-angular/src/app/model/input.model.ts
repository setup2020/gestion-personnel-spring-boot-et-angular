export interface IInput {
  id?: number;
  name?: string;
  description?: string;
  created_at?: Date;
  update_at?: Date;
  more?: string;
}

export class Input implements IInput {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public created_at?: Date,
    public update_at?: Date,
    public more?: string,
    public _method?: string
  ) {}
}
