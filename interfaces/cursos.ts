import { AlunoData } from "./alunos";

export interface CursoDate {
    id: number;
    curso: string;
    professor: string;
    cargaHoraria: number;
    descricao: string;
    createdAt: Date;
    updateAt: Date;
}

export interface Curso extends CursoDate {
    alunos: AlunoData[];
}