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
            skill.frameworks?.springboot,
            skill.bd?.oracledb,
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
            'Creacion de plataformas para e-commerce administrables',
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
];
