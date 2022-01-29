import { Module } from '@nestjs/common';
import { CartItemService } from './cartitems.service';
import { CartitemsController } from './cartitems.controller';

@Module({
  controllers: [CartitemsController],
  providers: [CartItemService],
})
export class CartitemsModule {}
