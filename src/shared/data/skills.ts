import { IInfoSkills } from '../interfaces';

export const skill: IInfoSkills = {
    lenguajes: {
        java: {
            titulo: 'Java',
            version: ['8'],
            icono: '../../assets/icons/skills/java.svg',
        },
        typeScript: {
            titulo: 'TypeScript',
            icono: '../../assets/icons/skills/ts.svg',
        },
        javaScript: {
            titulo: 'JavaScript',
            icono: '../../assets/icons/skills/js.svg',
        },
        php: {
            titulo: 'PHP',
            icono: '../../assets/icons/skills/php.svg',
        },
    },
    tools: {
        jwt: {
            titulo: 'JWT',
            icono: '../../assets/icons/skills/jwt.svg',
        },
        rxjs: {
            titulo: 'RxJs',
            icono: '../../assets/icons/skills/rxjs.png',
        },
        tailwind: {
            titulo: 'Tailwind',
            icono: '../../assets/icons/skills/tailwind.svg',
        },
    },
    frameworks: {
        angular: {
            titulo: 'Angular',
            version: ['13', '14', '15', '16', '17'],
            plugins: ['Angular Material'],
            icono: '../../assets/icons/skills/angular.svg',
        },
        nodejs: {
            titulo: 'NodeJs',
            icono: '../../assets/icons/skills/nodejs.svg',
        },
        react: {
            titulo: 'ReactJs',
            icono: '../../assets/icons/skills/react.svg',
        },
        springboot: {
            titulo: 'Springboot',
            icono: '../../assets/icons/skills/springboot.svg',
        },
    },
    bd: {
        mongodb: {
            titulo: 'MongoDB',
            icono: '../../assets/icons/skills/mongodb.svg',
        },
        mysql: {
            titulo: 'MySQL',
            icono: '../../assets/icons/skills/mysql.svg',
        },
        oracledb: {
            titulo: 'OracleDB',
            plugins: ['Oracle Spatial'],
            version: ['19c'],
            icono: '../../assets/icons/skills/oracle.svg',
        },
        postgres: {
            titulo: 'Postgres',
            plugins: ['PostGIS'],
            icono: '../../assets/icons/skills/postgres.svg',
        },
    },
};
