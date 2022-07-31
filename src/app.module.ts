import {
	MiddlewareConsumer,
	Module,
	NestModule,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [ScheduleModule.forRoot(), ConfigModule.forRoot()],
	controllers: [AppController],
	providers: [],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
