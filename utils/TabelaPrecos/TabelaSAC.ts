import CalculadoraDeJurosStategyInterface from './CalculadoraDeJurosStategyInterface.ts';
import  {Pedido}  from './Pedido.ts';


export class TabelaSAC implements CalculadoraDeJurosStategyInterface
{
  public getTaxaDeJuros(pedido : Pedido){
    return 10;
  }

}