export interface RespuestaToHeadLines{
    status: string;
    totalResults: number;
    articles: Articles[];
}

export interface Articles{
    source: Source;
    author: string;
    title: string;
    description: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface Source{
    id: string;
    name: string;
}

export interface Users{
    id:number;
    username: string;
    password: string;
    role: string;
    isactive: boolean
}


export interface IUsuarios{
    id:Number;
    username:String;
    email: String;
    edad:number;
    password: String;
    jornada: boolean;
    isactive: boolean;
}


export interface IUsuario{
    id:Number;
    username:String;
    email: String;
    edad:number;
    password: String;
    jornada: boolean;
    isactive: boolean;

}

export interface ICondutors{
    id:Number;
    username:String;
    email: String;
    edad:number;
    password: String;
    matricula: String;
    modelo: String;
    jornada: boolean;
    isactive: boolean;
}


export interface IConductor{
    id:Number;
    username:String;
    email: String;
    edad:number;
    password: String;
    matricula: String;
    modelo: String;
    jornada: boolean;
    isactive: boolean;

}