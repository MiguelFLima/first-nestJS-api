import { Module } from '@nestjs/common';
import { ProductsModule } from './Products/products.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, ProductsModule],
})
export class AppModule {}
