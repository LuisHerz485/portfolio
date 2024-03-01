import { IInfoSkills } from './skills.interface';

export interface IExperiencia {
    id: number;
    entidad: string;
    logoEntidad?: string;
    periodo: string;
    puesto: string;
    descripcionBreve: string;
    tareas: string[];
    skills: IInfoSkills | any;
}
