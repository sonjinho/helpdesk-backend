export class CertificationBody {
  id: string;
  name: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  constructor(
    id: string,
    name: string,
    address: string,
    phone: string,
    email: string,
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }
}
