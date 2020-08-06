import { Router } from 'https://deno.land/x/oak/mod.ts';
import {JurosSimples, CapitalJurosSimples, TaxaJurosSimples, TempoJurosSimples} from '../controllers/juros-simples-controller.ts';
import {CalculaTabelaPrice, CalculaTabelaSAC} from '../controllers/tabela-preco-controller.ts';

const router = new Router();

router
  .post("/JurosSimples",JurosSimples)
  .post("/CapitalJurosSimples", CapitalJurosSimples)
  .post("/TaxaJurosSimples", TaxaJurosSimples)
  .post("/TempoJurosSimples", TempoJurosSimples)
  
  /* Tabelas de preços */
  .post("/CalculaTabelaPrice",CalculaTabelaPrice)
  .post("/CalculaTabelaSAC",CalculaTabelaSAC)
  ;


export default router;