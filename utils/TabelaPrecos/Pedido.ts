export class Pedido {
  private valorFinanciado : number;
  private taxa : number;
  private qtdParcelas : number;

  constructor( valorFinanciado : number, taxa : number, qtdParcelas : number){
     
    this.valorFinanciado = valorFinanciado;
    this.taxa = taxa;
    this.qtdParcelas = qtdParcelas;
  }

  public getValorFinanciado(){
    return this.valorFinanciado;
  }

  public getTaxa(){
    return this.taxa;
  }

  public getQtdParcelas(){
    return this.qtdParcelas;
  }
}