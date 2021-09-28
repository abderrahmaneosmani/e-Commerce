import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { UsersrolesModule } from './usersroles/usersroles.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { CartitemsModule } from './cartitems/cartitems.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [UsersModule,RolesModule, UsersrolesModule, CategoriesModule, ProductsModule, CartitemsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
