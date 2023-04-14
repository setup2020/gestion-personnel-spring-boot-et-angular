export interface IAuditPlan {
  id?: number;
  name?: string;
  file?: string;
  auditId?: number;
  created_at?: Date;
  update_at?: Date;
}

export class AuditPlan implements IAuditPlan {
  constructor(
    public id?: number,
    public name?: string,
    public file?: string,
    public auditId?: number,
    public created_at?: Date,
    public update_at?: Date,
    public _method?: string
  ){}
}
