import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { FinancasModule } from './financas/financas.module';

@Module({
  imports: [AuthModule, FinancasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
