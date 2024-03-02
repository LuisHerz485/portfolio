import { IEstudio } from '../interfaces';
import * as enumKeys from '../../shared/enums';

export const estudios: IEstudio[] = [
    {
        logo: '../../assets/img/upn.png',
        institucion: enumKeys.estudiosKeyTranslate.ENTIDADUPN,
        carrera: enumKeys.estudiosKeyTranslate.MAESTRIATITULO,
        periodo: enumKeys.estudiosKeyTranslate.MAESTRIAPERIODO,
        skills: [enumKeys.estudiosKeyTranslate.MAESTRIASKILLS],
    },
    {
        logo: '../../assets/img/upn.png',
        institucion: enumKeys.estudiosKeyTranslate.ENTIDADUPN,
        carrera: enumKeys.estudiosKeyTranslate.DIPLOMADOTITULO,
        periodo: enumKeys.estudiosKeyTranslate.DIPLOMADOPERIODO,
        skills: [enumKeys.estudiosKeyTranslate.DIPLOMADOSKILLS],
    },
    {
        logo: '../../assets/img/upn.png',
        institucion: enumKeys.estudiosKeyTranslate.ENTIDADUPN,
        carrera: enumKeys.estudiosKeyTranslate.BACHILLERTITULO,
        periodo: enumKeys.estudiosKeyTranslate.BACHILLERPERIODO,
        skills: [enumKeys.estudiosKeyTranslate.BACHILLERSKILLS],
    },
];
