export interface IInfoSkills {
    lenguajes?: ILenguaje;
    tools?: ITools;
    frameworks?: IFrameworks;
    bd?: IBd;
}

interface ILenguaje {
    java?: IDataSkill;
    typeScript?: IDataSkill;
    javaScript?: IDataSkill;
    php?: IDataSkill;
}

interface ITools {
    jwt?: IDataSkill;
    rxjs?: IDataSkill;
    tailwind?: IDataSkill;
}

interface IFrameworks {
    angular?: IDataSkill;
    nodejs?: IDataSkill;
    react?: IDataSkill;
    springboot?: IDataSkill;
}

interface IBd {
    mongodb?: IDataSkill;
    mysql?: IDataSkill;
    oracledb?: IDataSkill;
    postgres?: IDataSkill;
}

export interface IDataSkill {
    titulo: string;
    version?: string[];
    icono: string;
    plugins?: string[];
}
