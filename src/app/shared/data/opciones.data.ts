import { IOpciones } from '../interfaces';
import * as enumKeys from '../enums/translate/header-keys.enum';

export const opciones: IOpciones[] = [
    {
        titulo: enumKeys.headerKeysTranslate.ACERCADEMI,
        ref: 'acercademi',
    },
    {
        titulo: enumKeys.headerKeysTranslate.PROYECTOS,
        ref: 'proyectos',
    },
    {
        titulo: enumKeys.headerKeysTranslate.EXPERIENCIAS,
        ref: 'experiencias',
    },
    {
        titulo: enumKeys.headerKeysTranslate.EDUCACION,
        ref: 'educacion',
    },
];
