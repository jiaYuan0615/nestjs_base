import { Test, TestingModule } from '@nestjs/testing';
import { UploadLibraryService } from './upload-library.service';

describe('UploadLibraryService', () => {
  let service: UploadLibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadLibraryService],
    }).compile();

    service = module.get<UploadLibraryService>(UploadLibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
