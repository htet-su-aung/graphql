import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { To_doModule } from './to_do/to_do.module';
import { DataSource } from 'typeorm';
import { To_doEntity } from './to_do/to_do.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    To_doModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '161.97.117.54',
      username: 'ToDo_User',
      password: 'ToDo4321@!',
      database: 'To_Do_List',
      entities: [To_doEntity],
      synchronize: true,
      autoLoadEntities: true,
      ssl: true,
      extra: {
        trustServerCertificate: true,
        Encrypt: true,
        IntegratedSecurity: false,
      },
      port: 1433,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
