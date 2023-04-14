export interface IDocument {
  id?: number;
  name?: string;
  parent?: number;
  path?: string;
  path1?: string;
  type?: string;
  version?: string;
  extension?: string;
  size?: number;
  userId?: number;
  created_at?: Date;
  appends?: IAppends;
}

interface IAppends {
  visibilities?: any[];
  link?: string;
}

export interface IVisibility {
  departmentId?: number;
  levelId?: number;
  write?: number;
  read?: number;
  download?: number;
}
export class Document implements IDocument {
  constructor(
    public id?: number,
    public name?: string,
    public parent?: number,
    public path?: string,
    public path1?: string,
    public type?: string,
    public version?: string,
    public size?: number,
    public userId?: number,
    public _method?: string,
    public visibilities?: IVisibility[]
  ) {}
}
