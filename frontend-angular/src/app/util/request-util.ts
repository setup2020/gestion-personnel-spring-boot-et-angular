import { HttpParams } from '@angular/common/http';

export class Pagination {
  page?: number;
  per_page?: string;
  filter?: boolean;
}

export class TaskPagination extends Pagination {
  type?: string;
  status?: string;
  search?: string;
  order?: string;
  dateStart?: string;
  dateEnd?: string;
}
export class ExigencePagination extends Pagination {
  rep_type?:string;
  group?:string;
}

export class ChallengePagination extends Pagination {
  type?:string;
}


export class KPIPagination extends Pagination {
  type?:string;
}


export const createRequestOption = (req?: any): HttpParams => {
  let options: HttpParams = new HttpParams();

  if (req) {
    Object.keys(req).forEach((key) => {
      if (key !== 'sort') {
        options = options.set(key, req[key]);
      }
    });

    if (req.sort) {
      req.sort.forEach((val: string) => {
        options = options.append('sort', val);
      });
    }
  }

  return options;
};

export const isNotEmpty = (req?: any): any => {
  let params: any;
  if (req) {
    params = Object.keys(req).map((r) => {
      if (req[r]) {
        return req[r];
      }
    });
  }
  return params;
};
