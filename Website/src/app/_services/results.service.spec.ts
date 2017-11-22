import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ResultsService } from '../barrel';

describe('ResultsService', () => {
  let service: ResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultsService]
    });

    service = TestBed.get(ResultsService);
  });

  it('should create an instance', () => {
    expect(service).toBeDefined();
  });

  it('should get an observable containing step by envoking getStep',
    async(inject([ResultsService], (service: ResultsService) => {
    service.getStep().subscribe(
      value => expect(value).toBe(0)
    );
  })));


  it('should update the value of step by envoking setStep',
    async(inject([ResultsService], (service: ResultsService) => {
    service.setStep(3);
    service.getStep().subscribe(
      value => expect(value).toBe(3)
    );
  })));


});
