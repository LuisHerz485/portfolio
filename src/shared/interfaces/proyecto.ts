import { IDataSkill } from './skills';

export interface IProyecto {
    id: number;
    titulo: string;
    entidad: string;
    descripcion: string;
    descripcionCorta: string;
    lugar?: string;
    skills: IDataSkill[] | any[];
    imagenes: string[];
}
