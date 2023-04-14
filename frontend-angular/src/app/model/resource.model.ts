export interface IResource {
  id?: number;
  name?: string;
  description?: string;
  created_at?: Date;
  update_at?: Date;
}

export class Resource implements IResource {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public created_at?: Date,
    public update_at?: Date,
    public _method?: string
  ) {}
}
