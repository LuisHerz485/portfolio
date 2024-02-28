import { IProyecto } from '../interfaces';
import { skill } from './skills';

export const proyectos: IProyecto[] = [
    {
        id: 1,
        titulo: 'Sinpad v3',
        entidad: 'Instituto Nacional de Defensa Civil',
        descripcion:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita optio quibusdam explicabo? Beatae maiores, aliquam, similique esse reiciendis dolorem veniam magnam laborum suscipit nihil, sapiente natus iure. Necessitatibus, facere nihil.',
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
        imagenes: [
            '../../../assets/img/slides/sinpad/sinpad1.png',
            '../../../assets/img/slides/sinpad/sinpad2.png',
            '../../../assets/img/slides/sinpad/sinpad3.png',
            '../../../assets/img/slides/sinpad/sinpad4.png',
        ],
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
        imagenes: [
            '../../../assets/img/slides/evanoz/evanoz1.png',
            '../../../assets/img/slides/evanoz/evanoz2.png',
            '../../../assets/img/slides/evanoz/evanoz3.png',
            '../../../assets/img/slides/evanoz/evanoz4.png',
            '../../../assets/img/slides/evanoz/evanoz5.png',
        ],
    },
    {
        id: 3,
        titulo: 'Sistema Tutati',
        entidad: 'Platanitos',
        descripcion: 'lorem',
        descripcionCorta: 'Sistema de gestion de almacenes para platanitos ',
        lugar: 'Peru',
        skills: [skill.lenguajes?.php, skill.bd?.mysql],
        imagenes: [
            '../../../assets/img/slides/tutati/tutati1.png',
            '../../../assets/img/slides/tutati/tutati2.png',
        ],
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
        imagenes: [
            '../../../assets/img/slides/cuentas-claras/cuentas1.png',
            '../../../assets/img/slides/cuentas-claras/cuentas2.png',
            '../../../assets/img/slides/cuentas-claras/cuentas3.png',
            '../../../assets/img/slides/cuentas-claras/cuentas4.png',
        ],
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
        imagenes: [
            '../../../assets/img/slides/cryptovote/crypto1.png',
            '../../../assets/img/slides/cryptovote/crypto2.png',
            '../../../assets/img/slides/cryptovote/crypto3.png',
        ],
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
        imagenes: [
            '../../../assets/img/slides/wayless/wayless1.png',
            '../../../assets/img/slides/wayless/wayless2.png',
            '../../../assets/img/slides/wayless/wayless3.png',
            '../../../assets/img/slides/wayless/wayless4.png',
        ],
    },
];
