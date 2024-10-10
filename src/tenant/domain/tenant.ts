export class Tenant {
  private readonly id: string;
  private readonly name: string;
  private readonly domain: string;
  private readonly contact: string;
  private readonly country: string;
  private readonly adminId: string;

  constructor(
    id: string,
    name: string,
    domain: string,
    contact: string,
    country: string,
    adminId: string,
  ) {
    this.id = id;
    this.name = name;
    this.domain = domain;
    this.contact = contact;
    this.country = country;
    this.adminId = adminId;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDomain(): string {
    return this.domain;
  }

  getContact(): string {
    return this.contact;
  }

  getCountry(): string {
    return this.country;
  }

  getAdminId(): string {
    return this.adminId;
  }
}
