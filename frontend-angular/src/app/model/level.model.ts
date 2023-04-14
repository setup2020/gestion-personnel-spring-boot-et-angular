// import { IBranche } from "./branch.model";

import { IRole } from "./role.model";

export interface ILevel {
  id?: number;
  key?: number;
  name?: string;
  parent?:number;
  roleId?: number;
  created_at?: Date;
  update_at?: Date;
  appends?:IAppends;
  
}
interface IAppends{
  role?:IRole
  isGrandFather?:boolean
}
export class Level implements ILevel {
  constructor(
    public id?: number,
    public key?: number,
    public name?: string,
    public roleId?: number,
     public parent?: number,
    public created_at?: Date,
    public update_at?: Date,
    public appends?:IAppends
  ) // public branche?:IBranche,
  {}
}
