import {
  assertEquals
} from "https://deno.land/std@0.63.0/testing/asserts.ts";

import { FormulaJurosSimples } from '../controllers/formulas-juros-simples.ts';


Deno.test("Calculando Capital de Juros Simples", () => {
  assertEquals(FormulaJurosSimples.calculaJurosSimples({juros : 300, taxa : 2, tempo : 7}),2142.86);
});

Deno.test("Calculando Juros Simples", () => {
  assertEquals(FormulaJurosSimples.calculaJurosSimples({capital : 1000, taxa : 2, tempo : 5}),100);
});

Deno.test("Calculando Taxa de Juros Simples", () => {
  assertEquals(FormulaJurosSimples.calculaJurosSimples({juros : 1500, capital : 5000, tempo : 4}),7.5);
});

Deno.test("Calculando Juros de Juros Simples", () => {
  assertEquals(FormulaJurosSimples.calculaJurosSimples({capital : 3200, taxa : 0.6, juros : 300}),15.625);
});