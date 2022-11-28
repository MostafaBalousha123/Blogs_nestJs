import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';

import { DatabaseModule } from './database/database.module';
import { BlogsModule } from './blogs/blogs.module';
import { AuthModule } from './Auth/auth.module';
import { UsersModule } from './users/users.module';

@Global()
@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', '..', 'client', 'public'),
    // }),
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    BlogsModule,
    AuthModule,
    UsersModule,
  ],
  providers: [],
})
export class AppModule {}