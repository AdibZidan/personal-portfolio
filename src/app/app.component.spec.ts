import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './shared/modules/application/app-routing.module';
import { TitleService } from './shared/services/title/title.service';

describe('Application Component', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let titleService: TitleService;
  let routerOutlet: RouterOutlet;
  let title: Title;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        AppRoutingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent
      ],
      providers: [
        {
          provide: RouterOutlet,
          useValue: {
            activatedRouteData: {
              animation: 'Test animation',
              title: 'Test title'
            }
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            children: [{
              snapshot: {
                data: {
                  title: 'Test title'
                }
              }
            }]
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    titleService = TestBed.inject(TitleService);
    routerOutlet = TestBed.inject(RouterOutlet);
    title = TestBed.inject(Title);
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Methods', () => {
    it(`Should change the route's title`, () => {
      spyOn(
        router.events,
        'pipe'
      ).and.returnValue(
        of(new NavigationEnd(0, 'test', 'test'))
      );

      component.ngOnInit();

      expect(title.getTitle()).toEqual('Test title');
    });

    it('Should prepare the router outlet', () => {
      spyOn(
        component,
        'prepare'
      ).and.callThrough();

      component.prepare(routerOutlet);

      expect(component.prepare).toHaveBeenCalledWith({
        activatedRouteData: {
          animation: 'Test animation',
          title: 'Test title'
        }
      });
    });
  });

});
