import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from 'configs/typeorm.config.service';
import { AdminModule } from './admin/admin.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './crm/customer.module';
import { InvoiceModule } from './invoice/invoice.module';
import { NotificationModule } from './notification/notification.module';
import { ProjectModule } from './project/project.module';
import { TenantModule } from './tenant/tenant.module';
import { UserModule } from './user/user.module';
import { WorkflowModule } from './workflow/workflow.module';
import { SettingModule } from './setting/setting.module';
import { MyPageModule } from './my-page/my-page.module';
import { ReportModule } from './report/report.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HelpDeskModule } from './help-desk/help-desk.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    UserModule,
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    AuthModule,
    CustomerModule,
    ProjectModule,
    TenantModule,
    WorkflowModule,
    NotificationModule,
    InvoiceModule,
    AdminModule,
    SettingModule,
    MyPageModule,
    ReportModule,
    DashboardModule,
    HelpDeskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
