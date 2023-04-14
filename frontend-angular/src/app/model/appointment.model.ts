export interface IAppointment {
  id?: number;
  type?: string;
  dateStart?: Date;
  dateEnd?: Date;
  userId?: number;
  date?: Date;
  hourStart?: string;
  organizer?: string;
  externParticipant?: string;
  object?: string;
  document?: string;
  participant?: number;
  description?: string;
  created_at?: Date;
  update_at?: Date;
  more?: string;
  departmentId?: number;
  frequency?: string;
  hourEnd?: string;
  appends?: Appends;
}
interface Appends {}
export class Appointment implements IAppointment {
  constructor(
    public id?: number,
    public dateStart?: Date,
    public dateEnd?: Date,
    public date?: Date,
    public hourEnd?: string,
    public hourStart?: string,
    public organizer?: string,
    public externParticipant?: string,
    public object?: string,
    public document?: string,
    public description?: string,
    public created_at?: Date,
    public update_at?: Date,
    public more?: string,
    public departmentId?: number,
    public userId?: number,
    public participant?: number,
    public frequency?: string,
    public type?: string,
    public _method?: string

  ) {}
}
