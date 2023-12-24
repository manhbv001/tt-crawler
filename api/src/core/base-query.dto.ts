import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumberString, IsOptional, IsString } from 'class-validator';

enum SortEnum {
  Desc = 'DESC',
  Asc = 'ASC',
}

export class BaseQueryDto {
  @IsNumberString()
  @IsOptional()
  @ApiProperty({ required: false, description: 'trang' })
  page?: number;

  @IsNumberString()
  @IsOptional()
  @ApiProperty({ required: false, description: 'số bản ghi' })
  size?: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, description: 'từ khóa' })
  search?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, description: 'điều kiện sắp xếp' })
  orderKey?: string;

  @IsEnum(SortEnum)
  @IsOptional()
  @ApiProperty({ required: false, description: 'giá trị sắp xếp' })
  orderBy?: SortEnum;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false, description: 'ngày bắt đầu' })
  startDate: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, description: 'ngày kết thúc' })
  endDate: string;
}
