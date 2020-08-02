import { PercentagemCalcs } from '../utils/porcentagem-calcs.ts';


export abstract class FormulaJurosSimples {
  static calculaJurosSimples(params: {juros? : number, taxa? : number, capital? : number, tempo? : number}) : number{

    params.juros = params.juros || 0;
    params.capital = params.capital || 0;
    params.taxa = params.taxa || 0;
    params.tempo = params.tempo || 0;
 
    if(!params.juros){
       return  PercentagemCalcs.convertPercentDecimal(params.taxa) * params.capital * params.tempo;
    } else if(!params.capital){
       return Number((params.juros / (PercentagemCalcs.convertPercentDecimal(params.taxa) * params.tempo)).toFixed(2));
    } else if(!params.taxa){
      return PercentagemCalcs.convertDecimalPercent(params.juros / (params.capital * params.tempo));
    } else if(!params.tempo){
      return params.juros / (params.capital * PercentagemCalcs.convertPercentDecimal(params.taxa));
    }
       return 0;
   }
}