import CalculadoraDeJurosStategyInterface from './CalculadoraDeJurosStategyInterface.ts';
import  {Pedido}  from './Pedido.ts';

export class SemJuros implements CalculadoraDeJurosStategyInterface
{
  public getTaxaDeJuros(pedido : Pedido){
    return Number((pedido.getValorFinanciado() / pedido.getQtdParcelas()).toFixed(2));
  }

}
