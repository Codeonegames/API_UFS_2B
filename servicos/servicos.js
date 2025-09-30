import colecaoUf from "../dados/dados.js";

export const buscarUfs = () => {
    return colecaoUf;
};

export const buscarUFsPorNome = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};

export const buscarUfPorId = (id) => {
    const idUF = parseInt(id);
    return colecaoUf.find(uf => uf.id === idUF);
};

export const buscarUfsPorSigla = (sigla) => {
    return colecaoUf.filter(uf => uf.sigla.toUpperCase() === sigla.toUpperCase());
};
