//import colecaoUf from "./dados/dados.js";
import express from 'express';
import { buscarUfs, buscarUfPorId, buscarUFsPorNome } from './servicos/servicos.js';
const app = express();

const buscarUFsPorNome = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()))
};

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUFsPorNome(nomeUf) : colecaoUf;
    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({"erro": "Nenhuma UF encontrada" });
    }
});
app.get('/ufs/:iduf', (req, res) => {
    const idUf = parseInt(req.params.iduf);
    const uf = buscarUfsPorId(idUf);

    if (uf) {
        res.json(uf)
    } else if(isNaN(idUf)) {
        res.status(400).json({ "erro": "Requisição inválida" });
    }else{
        res.status(404).json({ "erro": "UF não encontrada" });
    }
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080: ' + data);
});