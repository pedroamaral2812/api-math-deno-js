 import {Pedido} from '../utils/TabelaPrecos/Pedido.ts';
 import CalculadoraDeJuros from '../utils/TabelaPrecos/CalculadoraDeJuros.ts';
 import {TabelaPrice} from '../utils/TabelaPrecos/TabelaPrice.ts';
 import {TabelaSAC} from '../utils/TabelaPrecos/TabelaSAC.ts';


 const CalculaTabelaPrice = async ({
  request,response,
   }: {
   request: any;
   response: any;
   }) => {
    const {valorFinanciado , taxa, qtdParcelas} = await request.body().value;
    let pedido = new Pedido(10,valorFinanciado,taxa,qtdParcelas);
    let tabela = new TabelaPrice();
    let calculadora = new CalculadoraDeJuros(tabela);
    let resultado = calculadora.calculaJuros(pedido);
    response.body = { juros: resultado, formula : "Juros = Capital x tempo x (taxa/100)" };
    response.status = 200;
   
  };

  const CalculaTabelaSAC = async ({
    request,response,
     }: {
     request: any;
     response: any;
     }) => {
      const {valorFinanciado , taxa, qtdParcelas} = await request.body().value;
      let pedido = new Pedido(10,valorFinanciado,taxa,qtdParcelas);
      let tabela = new TabelaSAC();
      let calculadora = new CalculadoraDeJuros(tabela);
      let resultado = calculadora.calculaJuros(pedido);
      response.body = { juros: resultado, formula : "Juros = Capital x tempo x (taxa/100)" };
      response.status = 200;
     
    };


export  {CalculaTabelaPrice,CalculaTabelaSAC };