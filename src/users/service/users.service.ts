import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmailService } from 'src/core/email.service';
import { ExcelService } from 'src/core/excel.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private emailService: EmailService,
    private excelService: ExcelService,
  ) {}

  async create(dataUser: CreateUserDto) {
    try {
      // const newUser = new this.userModel(dataUser);
      // await newUser.save();
      await this.sendEmail(dataUser);
    } catch (error) {
      console.log(error);
    }
    return 'This action adds a new user';
  }

  async findAll() {
    let users: User[] = [];
    try {
      users = await this.userModel.find({}, { _id: 0, __v: 0 }).lean();
    } catch (error) {
      console.log(error);
    }
    return users;
  }

  async sendEmail(dataUser: CreateUserDto) {
    try {
      await this.emailService.sendMailAdvisory(dataUser);
      // const users = await this.findAll();
      // const excelFile = this.excelService.generateExcelFile(users);
      // await this.emailService.sendMailExcel(dataUser.email, excelFile);
    } catch (error) {
      console.log(error);
    }
    return `This action send a email to mentar for each user created`;
  }
}
