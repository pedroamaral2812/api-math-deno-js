import { writeCSV } from "https://deno.land/x/csv/mod.ts";

export default class tabelaPriceCSV
{
  constructor(){

  }

  public async geraCSV(devedor: number, taxa: number, valorParcelas: number, qtdParcelas:number){
    const f = await Deno.open("./Relatorios/TabelaPrice/tabelaPrice.csv", { write: true, create: true, truncate: true });
    
    const rows = [
    ["Numero Parcela", "Valor Parcela", "Juros", "Amortizacao", "Saldo Devedor"],
    ["", "", "", "", String(devedor)]
    ];

    var valorJuros : number = 0;
    var amortizacao : number = 0;
    for(let i = 1; i <= qtdParcelas; i++){
      valorJuros = devedor * taxa;
      amortizacao = valorParcelas - valorJuros;
      devedor = devedor - amortizacao;
      rows.push([String(i) + "/" + String(qtdParcelas), valorParcelas.toFixed(2) , valorJuros.toFixed(2), amortizacao.toFixed(2), devedor.toFixed(2)]);
    }
    await writeCSV(f, rows);
    f.close();
  }
}
