import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { utils, WorkBook, WorkSheet, write } from 'xlsx';

@Injectable()
export class ExcelService {
  generateExcelFile(users: User[]) {
    const ws: WorkSheet = utils.json_to_sheet(users);
    const wb: WorkBook = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Sheet1');
    const buf = write(wb, { type: 'buffer', bookType: 'xlsx' });
    return buf;
  }
}
