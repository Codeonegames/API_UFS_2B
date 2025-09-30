import express from 'express';
import { buscarUFsPorNome, buscarUfPorId, buscarUfs, buscarUfsPorSigla } from './servicos/servicos.js';

const app = express();

app.get('/ufs', (req, res) => {
  const nomeUf = req.query.busca;
  try {
    const resultado = nomeUf ? buscarUFsPorNome(nomeUf) : buscarUfs();
    if (resultado.length > 0) {
      res.json(resultado);
    } else {
      res.status(404).send({ "erro": "Nenhuma UF encontrada" });
    }
  } catch (error) {
    res.status(500).send({ "erro": "Erro ao buscar UFs" });
  }
});

app.get('/ufs/:iduf', (req, res) => {
  const iduf = req.params.iduf;
  if (isNaN(parseInt(iduf))) {
    return res.status(400).send({ "erro": "Requisição inválida" });
  }
  
  try {
    const uf = buscarUfPorId(iduf);
    if (uf) {
      res.json(uf);
    } else {
      res.status(404).send({ "erro": "UF não encontrada" });
    }
  } catch (error) {
    res.status(500).send({ "erro": "Erro ao buscar UF" });
  }
});

app.get('/ufs/sigla', (req, res) => {
  const siglaUf = req.query.sigla;
  try {
    const resultado = siglaUf ? buscarUfsPorSigla(siglaUf) : buscarUfs();
    if (resultado.length > 0) {
      res.json(resultado);
    } else {
      res.status(404).send({ "erro": "Nenhuma UF encontrada com essa sigla" });
    }
  } catch (error) {
    res.status(500).send({ "erro": "Erro ao buscar UFs por sigla" });
  }
});

app.listen(8080, () => {
    const data = new Date();
    console.log('Servidor iniciado na porta 8080 - ' + data.toLocaleString());
});
