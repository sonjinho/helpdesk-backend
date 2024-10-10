export enum SnsType {
  FACEBOOK = 'facebook',
  TWITTER = 'twitter',
  INSTAGRAM = 'instagram',
  LINE = 'line',
  WECHAT = 'wechat',
  WHATSAPP = 'whatsapp',
  KAKAO = 'kakao',
  NAVER = 'naver',
  GOOGLE = 'google',
  APPLE = 'apple',
}
export class CustomerSns {
  private id: number;
  private customerId: string;
  private snsType: SnsType;
  private snsId: string;
  private constructor(
    id: number,
    customerId: string,
    snsType: SnsType,
    snsId: string,
  ) {
    this.id = id;
    this.customerId = customerId;
    this.snsType = snsType;
    this.snsId = snsId;
  }

  getId() {
    return this.id;
  }

  getCustomerId() {
    return this.customerId;
  }

  getSnsType() {
    return this.snsType;
  }

  getSnsId() {
    return this.snsId;
  }

  static withId(
    id: number,
    customerId: string,
    snsType: SnsType,
    snsId: string,
  ) {
    return new CustomerSns(id, customerId, snsType, snsId);
  }

  static withoutId(customerId: string, snsType: SnsType, snsId: string) {
    return new CustomerSns(undefined, customerId, snsType, snsId);
  }
}
