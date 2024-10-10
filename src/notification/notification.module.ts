import { Module } from '@nestjs/common';
import { MailModule } from './mail/mail.module';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { WechatModule } from './wechat/wechat.module';
import { KakaoModule } from './kakao/kakao.module';
import { SlackModule } from './slack/slack.module';

@Module({
  imports: [MailModule, WhatsappModule, WechatModule, KakaoModule, SlackModule],
})
export class NotificationModule {}
