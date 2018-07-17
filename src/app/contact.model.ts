export class ContactModel {
  constructor(private name: string,
              private email:string,
              private phone:string,
              private address:string)
  {

  }

  public getName():string{
    return this.name;
  }

  public getEmail():string{
    return this.email;
  }

  public getPhone():string{
    return this.phone;
  }

  public getAddress():string{
    return this.address;
  }
}
