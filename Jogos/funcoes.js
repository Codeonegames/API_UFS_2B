import colecaoJogos from "./Colecao.js";

export const buscarJogos = () => {
    return colecaoJogos;
};
export const buscarJogosPorNome = (nome) => {
    return colecaoJogos.filter(undefined.nome.toLowerCase().includes(nome.toLowerCase()));
};

export const buscarUfPorId = (id) => {
    const idUF = parseInt(id);
    return colecaoJogos.find(uf => uf.id === idUF);
};
export const buscarJogosPorPlataforma = (Plat) => {
    return colecaoJogos.find(Plataforma => Plat.Plataforma.toUpperCase() === Plataforma.toUpperCase());
};