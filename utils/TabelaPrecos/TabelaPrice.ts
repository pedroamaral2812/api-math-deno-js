import CalculadoraDeJurosStategyInterface from './CalculadoraDeJurosStategyInterface.ts';
import  {Pedido}  from './Pedido.ts';

export class TabelaPrice implements CalculadoraDeJurosStategyInterface
{
  public getTaxaDeJuros(pedido : Pedido){
    return Number((pedido.getValorFinanciado() * ((((1 + pedido.getTaxa()) ** pedido.getQtdParcelas()) * pedido.getTaxa())/
    (((1 + pedido.getTaxa()) ** pedido.getQtdParcelas()) - 1))).toFixed(2));
  }

}
