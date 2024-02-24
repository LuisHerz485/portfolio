import { IProyecto } from '../interfaces';
import { skill } from './skills';

export const proyectos: IProyecto[] = [
    {
        id: 1,
        titulo: 'Sinpad v3',
        entidad: 'Instituto Nacional de Defensa Civil',
        descripcion: 'lorem',
        descripcionCorta:
            'Proyecto gubernamental para la gestion de desastres naturales',
        lugar: 'Peru',
        skills: [
            skill.frameworks?.angular,
            skill.lenguajes?.java,
            skill.frameworks?.springboot,
            skill.bd?.oracledb,
            skill.geo?.arcgis,
            skill.bd?.postgres,
            skill.tools?.jwt,
            skill.tools?.rxjs,
            skill.lenguajes?.typeScript,
            skill.lenguajes?.javaScript,
        ],
        imagenes: ['../../assets/img/slides/sinpad/sinpad1.webp'],
    },
    {
        id: 2,
        titulo: 'Evanoz & Evanoz Admin',
        entidad: 'PolySoft',
        descripcion: 'lorem',
        descripcionCorta:
            'Creacion de plataformas para e-commerce y su CMS personalizado',
        lugar: 'Argentina',
        skills: [
            skill.frameworks?.angular,
            skill.frameworks?.nodejs,
            skill.bd?.mongodb,
            skill.tools?.jwt,
            skill.tools?.rxjs,
        ],
        imagenes: [],
    },
    {
        id: 3,
        titulo: 'Sistema Tutati',
        entidad: 'Platanitos',
        descripcion: 'lorem',
        descripcionCorta: 'Sistema de gestion de almacenes para platanitos ',
        lugar: 'Peru',
        skills: [skill.lenguajes?.php, skill.bd?.mysql],
        imagenes: [],
    },
    {
        id: 4,
        titulo: 'Cuentas Claras',
        entidad: 'Free Lance',
        descripcion: 'lorem',
        descripcionCorta: 'Template para paginas dedicadas a la contaduria',
        lugar: 'Argentina',
        skills: [
            skill.frameworks?.angular,
            skill.lenguajes?.typeScript,
            skill.tools?.rxjs,
            skill.tools?.bootstrap,
        ],
        imagenes: [],
    },
    {
        id: 5,
        titulo: 'CryptoVote',
        entidad: 'Polysoft',
        descripcion: 'lorem',
        descripcionCorta:
            'Template para paginas dedicadas a votacion de cryptos',
        lugar: 'Argentina',
        skills: [
            skill.frameworks?.angular,
            skill.lenguajes?.typeScript,
            skill.tools?.rxjs,
            skill.tools?.tailwind,
        ],
        imagenes: [],
    },
    {
        id: 6,
        titulo: 'Wayless Portfolio',
        entidad: 'Free Lance',
        descripcion: 'lorem',
        descripcionCorta: 'Template para mi portafolio personal',
        lugar: 'Peru',
        skills: [
            skill.frameworks?.angular,
            skill.lenguajes?.typeScript,
            skill.tools?.tailwind,
        ],
        imagenes: [],
    },
];
