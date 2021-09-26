import { Test, TestingModule } from '@nestjs/testing';
import { UsersrolesController } from './usersroles.controller';
import { UsersrolesService } from './usersroles.service';

describe('UsersrolesController', () => {
  let controller: UsersrolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersrolesController],
      providers: [UsersrolesService],
    }).compile();

    controller = module.get<UsersrolesController>(UsersrolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
