/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { isDefined } from '@uiux/fn/common';
import { Observable } from 'rxjs';

export function isDefinedPipe<T>(): any {
  return (source: Observable<T>): Observable<T> => {
    return new Observable((observer) => {
      return source.subscribe({
        next(x: any) {
          if (isDefined(x)) {
            observer.next(x);
          }
        },
        error(err) {
          observer.error(err);
        },
        complete() {
          observer.complete();
        },
      });
    });
  };
}