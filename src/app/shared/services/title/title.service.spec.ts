import { TestBed, waitForAsync } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { TitleService } from './title.service';

describe('Title Service', () => {

  let service: TitleService;
  let router: Router;
  let activatedRoute: ActivatedRoute;
  let title: Title;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{
        provide: Router,
        useValue: {
          events: of(new NavigationEnd(0, 'test', 'test')),
        }
      },
      {
        provide: ActivatedRoute,
        useValue: {
          children: [{
            snapshot: {
              data: {
                title: 'Test Title'
              }
            }
          }]
        }
      }]
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(TitleService);
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    title = TestBed.inject(Title);
  });

  it('Should create', () => {
    expect(service).toBeTruthy();
  });

  it('Should set the title', () => {
    service.setTitle();

    expect(title.getTitle()).toEqual('Test Title');
  });

});
