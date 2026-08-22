// Tipos simplificados — sem dependência de Supabase

export interface Servico {
  id: string;
  titulo: string;
  descricao: string | null;
  duracao: string | null;
  preco: number | null;
  categoria: string;
  ativo: boolean;
  ordem: number;
}

export interface Depoimento {
  id: string;
  nome: string;
  depoimento: string;
}

export interface FAQ {
  id: string;
  pergunta: string;
  resposta: string;
  ordem: number;
}
