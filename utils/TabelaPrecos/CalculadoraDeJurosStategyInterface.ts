import  {Pedido}  from './Pedido.ts';

export default interface CalculadoraDeJurosStategyInterface {
    getTaxaDeJuros(pedido : Pedido) : number;
}