export interface ITypeOrganisation {
  id?: number;
  hasChild?: boolean;
  hasParent?: boolean;
  libelle?: string;
  libelleEn?: string;
}

export interface IOrganisation {
  id?: number;
  libelle?: string;
  libelleEn?: string;
  parent?: number;
  typeOrganisationDTO?: ITypeOrganisation;
  organisationDTOList?: IOrganisation[];
}

export interface IPoste {
  id?: number | null;
  libelle?: String;
  libelleEn?: String;
  responsable?:boolean
  organisationDTO?: IOrganisation;
}

export interface IUser {
  activated?:boolean;
  createdBy?:string;
  createdDate?:string;
  email?:string;
  firstName?:string;
  id?:number;
  imageUrl?:string;
  langKey?:string;
  lastModifiedBy?:string;
  lastModifiedDate?:string
  lastName?:string;
  login?:string;
}

export interface ILineUserPoste{
    id?:number,
    posteDTO?:IPoste
    responsable?:boolean
    userDTO?:IUser,
    boss?:boolean
   
}

export interface ILineUserPosteDTO{
    lineUserPosteDTO:ILineUserPoste[];
}

export interface ITask {
  id?: number | null;
  pointA?: number;
  pointB?: number;
  name?:string;
  status?:string;
}
