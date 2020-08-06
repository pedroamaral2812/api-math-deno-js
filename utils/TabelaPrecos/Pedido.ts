export class Pedido {
  private total : number;
  private valorFinanciado : number;
  private taxa : number;
  private qtdParcelas : number;

  constructor(total: number, valorFinanciado : number, taxa : number, qtdParcelas : number){
    this.total = total; 
    this.valorFinanciado = valorFinanciado;
    this.taxa = taxa;
    this.qtdParcelas = qtdParcelas;
  }

  public getTotal(){
    return this.total;
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