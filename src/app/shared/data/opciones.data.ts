import { IOpciones } from '../interfaces';
import * as enumKeys from '../enums/translate/header-keys.enum';

export const opciones: IOpciones[] = [
    {
        titulo: enumKeys.headerKeysTranslate.INICIO,
        ref: 'inicio',
    },
    {
        titulo: enumKeys.headerKeysTranslate.ACERCADEMI,
        ref: 'acercademi',
    },
    {
        titulo: enumKeys.headerKeysTranslate.PROYECTOS,
        ref: 'proyectos',
    },
    {
        titulo: enumKeys.headerKeysTranslate.CONOCIMIENTOS,
        ref: 'conocimientos',
    },
    {
        titulo: enumKeys.headerKeysTranslate.EDUCACION,
        ref: 'educacion',
    },
];
