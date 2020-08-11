import { writeCSV } from "https://deno.land/x/csv/mod.ts";

export default class tabelaSemJurosCSV
{
  constructor(){

  }

  public async  geraCSV(valorParcelas: number, qtdParcelas:number){
    const f = await Deno.open("./Relatorios/TabelaSemJuros/tabelaFixa.csv", { write: true, create: true, truncate: true });
    
    var ValorTotal = valorParcelas * qtdParcelas;
    
    const rows = [
    ["Parcela", "Valor da Parcela", "Valor Faltante"],
    ["", "", String(ValorTotal)]
    ];

    for(let i = 1; i <= qtdParcelas; i++){
      var ValorRestante = ValorTotal - (i * valorParcelas);
      rows.push([String(i) + "/" + String(qtdParcelas), valorParcelas.toFixed(2) , ValorRestante.toFixed(2)]);
    }
    await writeCSV(f, rows);
    f.close();
  }
  
}
