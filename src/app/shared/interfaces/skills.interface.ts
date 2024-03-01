export interface IInfoSkills {
    basic?: IBasic | any;
    lenguajes?: ILenguaje;
    tools?: ITools;
    frameworks?: IFrameworks;
    bd?: IBd;
    versionable?: IVersionable;
    metology?: IMetology;
    geo?: IGeo;
    uiux?: IUiUx;
}

interface IUiUx {
    photoshop: IDataSkill;
}

interface IBasic {
    html: IDataSkill;
    css: IDataSkill;
    sass: IDataSkill;
}

interface IGeo {
    arcgis?: IDataSkill;
    qgis?: IDataSkill;
}

interface IVersionable {
    git: IDataSkill;
    github?: IDataSkill;
    gitlab?: IDataSkill;
}

interface IMetology {
    scrum: IDataSkill;
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
    socketio: IDataSkill;
    bootstrap?: IDataSkill;
    npm?: IDataSkill;
    swagger?: IDataSkill;
    leaflet?: IDataSkill;
    aws: IDataSkill;
    wordpress: IDataSkill;
    jquery: IDataSkill;
}

interface IFrameworks {
    angular?: IDataSkill;
    nodejs?: IDataSkill;
    react?: IDataSkill;
    springboot?: IDataSkill;
    express?: IDataSkill;
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
