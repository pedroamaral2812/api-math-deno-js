import {
  assertEquals
} from "https://deno.land/std@0.63.0/testing/asserts.ts";

import { PercentagemCalcs } from '../utils/porcentagem-calcs.ts';


Deno.test("Convertendo Porcentagem de 2% em decimal", () => {
  assertEquals(PercentagemCalcs.convertPercentDecimal(2),0.02);
});

Deno.test("Convertendo Porcentagem de 100% em decimal", () => {
  assertEquals(PercentagemCalcs.convertPercentDecimal(2),0.02);
});

Deno.test("Convertendo Porcentagem de 0% em decimal", () => {
  assertEquals(PercentagemCalcs.convertPercentDecimal(0),0.00);
});

Deno.test("Convertendo Decimal de 0,075 Percentagem", () => {
  assertEquals(PercentagemCalcs.convertDecimalPercent(0.075),7.5);
});

Deno.test("Convertendo Decimal de 1 Percentagem", () => {
  assertEquals(PercentagemCalcs.convertDecimalPercent(1),100);
});