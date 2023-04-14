import { STATE } from './../util/enum';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TYPE_UNIT } from '../model/kpi.model';
import { IUser } from '../model/user.model';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: any, limit: number): string {
    if (value) {
      return value.length < limit ? value : value.slice(0, limit) + '...';
    }
    return '';
  }
}

@Pipe({
  name: 'safeUrl',
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}
  transform(value: string) {
    return this.sanitized.bypassSecurityTrustResourceUrl(value);
  }
}

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(value: IUser): string {
    if (value) {
      return value?.firstname + ' ' + value?.lastname;
    }
    return '--';
  }
}

@Pipe({
  name: 'targetValue',
})
export class TargetValuePipe implements PipeTransform {
  transform(unity: string): string {
    if (unity === TYPE_UNIT.PERCENT) {
      return '%';
    }
    if (unity === TYPE_UNIT.COST) {
      return ' FCFA';
    }
    return '';
  }
}

@Pipe({
  name: 'parent',
})
export class ParentPipe implements PipeTransform {
  transform(parent: string): string {
    return parent ? parent : 'None';
  }
}
@Pipe({
  name: 'occupancy',
})
export class OccupancyPipe implements PipeTransform {
  transform(value: number): string {
    return value + ' %';
  }
}
@Pipe({
  name: 'progressBar',
})
export class ProgressBarPipe implements PipeTransform {
  transform(collection: any): number {
    let sum = 0;
    collection.forEach((collect: any) => {
      sum += collect.progress;
    });
    return sum;
  }
}

@Pipe({
  name: 'occupation',
})
export class OccupationPipe implements PipeTransform {
  transform(collection: any): number {
    let sum = 0;
    collection.forEach((collect: any) => {
      if (collect.state === STATE.IN_PROGRESS) {
        sum += collect.occuperate;
      }
    });
    return sum;
  }
}

@Pipe({ name: 'sizeFile' })
export class SizeFilePipe implements PipeTransform {
  transform(size: number): string {
    var fSExt = new Array('Bytes', 'KB', 'MB', 'GB');
    let fSize = size;
    let i = 0;
    while (fSize > 900) {
      fSize /= 1024;
      i++;
    }

    return Math.round(fSize * 100) / 100 + ' ' + fSExt[i];
  }
}
