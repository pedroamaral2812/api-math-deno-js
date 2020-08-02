import { FormulaJurosSimples } from './formulas-juros-simples.ts'
 
 const JurosSimples = async ({
  request,response,
   }: {
   request: any;
   response: any;
   }) => {
   const {capital, tempo, taxa} = await request.body().value;

      let juros = FormulaJurosSimples.calculaJurosSimples({capital : capital, taxa : taxa, tempo : tempo});
      response.body = { juros: juros, formula : "Juros = Capital x tempo x (taxa/100)" };
      response.status = 200;
  };

  const CapitalJurosSimples = async ({
   request,response,
    }: {
    request: any;
    response: any;
    }) => {
    const {juros, tempo, taxa} = await request.body().value;
 
       let capital = FormulaJurosSimples.calculaJurosSimples({juros : juros, taxa : taxa, tempo : tempo});
       response.body = { capital: capital, formula : "Capital = juros / (taxa x tempo)" };
       response.status = 200;
   };

   const TaxaJurosSimples = async ({
      request,response,
       }: {
       request: any;
       response: any;
       }) => {
       const {juros, tempo, capital} = await request.body().value;
    
          let taxa = FormulaJurosSimples.calculaJurosSimples({juros : juros, capital : capital, tempo : tempo});
          response.body = { Taxa: taxa, formula : "Taxa = juros / (capital x tempo)" };
          response.status = 200;
      };

   const TempoJurosSimples = async ({
      request,response,
         }: {
         request: any;
         response: any;
         }) => {
         const {juros, taxa, capital} = await request.body().value;
      
            let tempo = FormulaJurosSimples.calculaJurosSimples({juros : juros, capital : capital, taxa : taxa});
            response.body = { Tempo: tempo, formula : "Tempo = juros / (capital x taxa)" };
            response.status = 200;
      };
   



export  {JurosSimples, CapitalJurosSimples,TaxaJurosSimples,TempoJurosSimples};