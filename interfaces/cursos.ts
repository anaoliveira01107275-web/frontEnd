import { AlunoData } from "./alunos";

export interface CursoData {
    id: number;
    nome: string;
    professor?: string;
    cargaHoraria: string;
    descricao: string;
    createdAt: Date;
    updateAt: Date;
}

export interface Curso extends CursoData {
    alunos: AlunoData[];
}