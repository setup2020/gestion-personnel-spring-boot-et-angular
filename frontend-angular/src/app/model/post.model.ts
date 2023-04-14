export interface IPost {
id?: number;
name?: string;
description?: string;
mission?: string;
profil?: string;
equipe?: string;
connaissance_marche?: string;
connaissance_metier?: string;
connaissance_milieu?: string;
connaissance_methode?: string;
connaissance_generale?: string;
experience_marche?: string;
experience_metier?: string;
experience_milieu?: string;
experience_methode?: string;
experience_generale?: string;
acculturation?: string;
courtoisie?: string;
relationnel?: string;
integration?: string;
sociabilisation?: string;
resilience?: string;
initiative?: string;
critique?: string;
professionalisme?: string;
emotions?: string;
coordination?: string;
gestion_equipe?: string;
decision?: string;
responsabilite?: string;
procedure?: string;
exigence?: string;
normes?: string;
morale?: string;
ethique?: string;
created_at?: Date;
update_at?: Date;
more?: string;
}

export class Post implements IPost {
    constructor(
      public id?: number,
      public name?: string,
      public mission?: string,
      public profil?: string,
      public equipe?: string,
      public connaissance_marche?: string,
      public connaissance_metier?: string,
      public connaissance_milieu?: string,
      public connaissance_methode?: string,
      public connaissance_generale?: string,
      public experience_marche?: string,
      public experience_metier?: string,
      public experience_milieu?: string,
      public experience_methode?: string,
      public experience_generale?: string,
      public acculturation?: string,
      public courtoisie?: string,
      public relationnel?: string,
      public integration?: string,
      public sociabilisation?: string,
      public resilience?: string,
      public initiative?: string,
      public critique?: string,
      public professionalisme?: string,
      public emotions?: string,
      public coordination?: string,
      public gestion_equipe?: string,
      public decision?: string,
      public responsabilite?: string,
      public procedure?: string,
      public exigence?: string,
      public normes?: string,
      public morale?: string,
      public description?: string,
      public ethique?: string,
      public created_at?: Date,
      public update_at?: Date,
      public more?: string,
      public _method?: string
    ) {}
  }
