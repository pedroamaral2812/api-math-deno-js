import {
  assertEquals
} from "https://deno.land/std@0.63.0/testing/asserts.ts";

import {Pedido} from '../utils/TabelaPrecos/Pedido.ts';
import CalculadoraDeJuros from '../utils/TabelaPrecos/CalculadoraDeJuros.ts';
import {TabelaPrice} from '../utils/TabelaPrecos/TabelaPrice.ts';
import {TabelaSAC} from '../utils/TabelaPrecos/TabelaSAC.ts';
import { SemJuros } from './../utils/TabelaPrecos/SemJuros.ts';

Deno.test("Calculando Valor da parcela em financiamento sem juros de 15000", () => {
  let pedido = new Pedido(15000,0,36);
  let tabela = new SemJuros();
  let calculadora = new CalculadoraDeJuros(tabela);
  assertEquals(calculadora.calculaJuros(pedido),416.67);
});

Deno.test("Calculando Valor da parcela em financiamento sem juros de 14000", () => {
  let pedido = new Pedido(14000,0,36);
  let tabela = new SemJuros();
  let calculadora = new CalculadoraDeJuros(tabela);
  assertEquals(calculadora.calculaJuros(pedido),388.89);
});


Deno.test("Calculando Valor da parcela em financiamento Price de 30000 taxa 1,5% em 12 parcelas", () => {
  let pedido = new Pedido(30000,0.015,12);
  let tabela = new TabelaPrice();
  let calculadora = new CalculadoraDeJuros(tabela);
  assertEquals(calculadora.calculaJuros(pedido),2750.40);
});

