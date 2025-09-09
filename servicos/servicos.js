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
export const buscarUfsPorSigla = (sigla) => {
    return colecaoUf.find(uf => uf.sigla.toUpperCase() === sigla.toUpperCase());
};

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080: ' + data);
});