import { Test, TestingModule } from '@nestjs/testing';
import { UsersrolesService } from './usersroles.service';

describe('UsersrolesService', () => {
  let service: UsersrolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersrolesService],
    }).compile();

    service = module.get<UsersrolesService>(UsersrolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
