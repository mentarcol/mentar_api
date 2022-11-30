import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { enviroments } from './enviroments';
import configuration from './config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      // De esta manera hacemos que lea el archivo .env segun el 'NODE_ENV' que ingresemos y que sea global para toda la aplicacion,
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      // Con 'load' estamos cargando la configuración para que se pueda inyectar y asi podriamos leer las variables de entorno.
      isGlobal: true,
    }),
    UsersModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
