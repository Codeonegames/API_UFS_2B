import colecaoUf from "../dados/dados";

export const buscarUfs = () => {
    return colecaoUf;
};
export const buscarUFsPorNome = (nomeUf) => {
    return colecaoUf.filter(undefined.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};

export const buscarUfPorId = (id) => {
    const idUF = parseInt(id);
    return colecaoUf.find(uf => uf.id === idUF);
};

app.listen