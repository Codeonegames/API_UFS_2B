import colecaoUf from "./dados/dados.js";
import express from 'express';

const app = express();

app.get('/ufs', (req, res) => {
    res.json(colecaoUf)
});
app.get('/ufs/:iduf', (req, res) => {
    const iduf = parseInt(req.params.iduf);
    const uf = colecaoUf.find(u => u.id === iduf);
    res.json(uf)
    if (!(isNaN(iduf))) {
        uf = colecaoUf.find(u => u.id === iduf);
        if (!uf) {
            mensagemErro = 'UF não encontrada';
        }
    } else {
        mensagemErro = 'Requisição inválida';
    }
    if (uf) {
        res.json(uf);
    } else {
        res.status(404).json({ "erro": mensagemErro });
    }
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080: ' + data);
});