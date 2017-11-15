import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ResultsService {
    private step = new Subject<Number>();

    setStep(index: Number) {
        this.step.next(index);
  }

    getStep(): Observable<any> {
          return this.step.asObservable();
      }
}
