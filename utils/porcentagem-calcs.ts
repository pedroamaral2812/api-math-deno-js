export abstract class PercentagemCalcs {
  static convertPercentDecimal( percent? : number ) : number{
      if(!percent){
         return 0.00;
      }

      if(percent == 0){
         return percent;
      }

      return Number((percent/100).toFixed(4));
   }

   static convertDecimalPercent( decimal? : number) : number {
      if(!decimal){
         return 0;
      }

      if(decimal == 0){
         return decimal;
      }

      return decimal * 100;
   }
}