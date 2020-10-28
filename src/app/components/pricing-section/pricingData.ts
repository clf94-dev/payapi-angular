export class PricingData {

  constructor(public title: string,
  public text: string,
  public price: string,
  public transTick:boolean,
  public authTick:boolean,
  public identTick:boolean,
  public investTick: boolean,
  public assetsTick: boolean,
  public liabilitTick: boolean,
  public incoTick:boolean){}
 
}