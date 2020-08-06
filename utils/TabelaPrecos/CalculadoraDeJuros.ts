import CalculadoraDeJurosStategyInterface from './CalculadoraDeJurosStategyInterface.ts';
import {Pedido} from './Pedido.ts';

export default class CalculadoraDeJuros
{
  private calculadorDeJuros : CalculadoraDeJurosStategyInterface;

  constructor(calculadorDeJuros : CalculadoraDeJurosStategyInterface){
    this.calculadorDeJuros = calculadorDeJuros;
  }

  public calculaJuros(pedido : Pedido){
    return this.calculadorDeJuros.getTaxaDeJuros(pedido);
  }
}