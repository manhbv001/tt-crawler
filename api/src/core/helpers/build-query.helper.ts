import { BaseQueryDto } from '@/core/base-query.dto';
import { Pagination } from '@/core/pagination.interface';
import dayjs from 'dayjs';
import _ from 'lodash';
import { Between, FindOptionsOrder, Like } from 'typeorm';

export function buildQuery<T>(dtoPayload: BaseQueryDto): {
  where: Record<string, any>;
  order: FindOptionsOrder<T>;
  pagination: Pagination;
} {
  const dto: BaseQueryDto = _.cloonDeep(dtoPayload);
  const pagination = {
    page: dto.page,
    size: dto.size,
  };
  const search = dto.search;
  const order = {};
  order[dto.orderKey || 'createdAt'] = dto.orderBy || 'DESC';
  let timeRange;

  if (dto.startDate) {
    timeRange = Between(
      new Date(dayjs(dto.startDate).startOf('D').valueOf()),
      dto.endDate
        ? new Date(dayjs(dto.endDate).endOf('D').valueOf())
        : new Date(),
    );
  }
  delete dto.page;
  delete dto.size;
  delete dto.search;
  delete dto.startDate;
  delete dto.endDate;
  delete dto.orderBy;
  delete dto.orderKey;

  const where: any = { ...dto };
  if (search) where.search_text = Like(`%${search}%`);
  if (timeRange) where.created_at = timeRange;

  return {
    where,
    order,
    pagination,
  };
}
