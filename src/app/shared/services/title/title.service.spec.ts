import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { TitleService } from './title.service';

describe('Title Service', () => {

  let titleService: TitleService;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    titleService = TestBed.inject(TitleService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('Should be defined/exist', () => {
    expect(titleService)
      .toBeDefined();
  });

  it('Should be built/compiled', () => {
    expect(titleService
      instanceof TitleService)
      .toBeTruthy();
  });

});
