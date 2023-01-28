import { Module } from '@nestjs/common';
import { UploadLibraryService } from './upload-library.service';

@Module({
  providers: [UploadLibraryService],
  exports: [UploadLibraryService],
})
export class UploadLibraryModule {}
