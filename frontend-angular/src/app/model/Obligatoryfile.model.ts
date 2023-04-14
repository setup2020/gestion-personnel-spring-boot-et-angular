export interface IObligatoryfile {

    id?: number;
    name?: String;
    description?: String;
    content?: String;
    created_at?: Date;
    update_at?: Date;
    more?: string;

}
export class Obligatoryfile implements IObligatoryfile{

    constructor(

        public id?: number,
        public name?: string,
        public description?: string,
        public content?: string,
        public created_at?: Date,
        public update_at?: Date,
        public more?: string,

        public _method?: string
    ){}

}