import { Controller ,Post,Get,Patch,Delete,Body,Param} from '@nestjs/common';
import { CartitemsService } from './cartitems.service';


@Controller('cartitems')
export class CartitemsController {
  constructor(private readonly cartitemsService: CartitemsService) {}

  @Post()
  create(@Body() createUserDto: any) {
    return this.cartitemsService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.cartitemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartitemsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.cartitemsService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartitemsService.remove(id);
  }

}
