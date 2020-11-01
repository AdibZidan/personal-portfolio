import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { taskServiceSpy } from 'src/app/shared/mocks/task-service.mock';
import { TaskService } from '../../../shared/services/task-manager/task.service';
import { BodyComponent } from '../body/body.component';
import { DialogComponent } from '../dialog/dialog.component';
import { FormComponent } from '../form/form.component';
import { MainComponent } from './main.component';

describe('Main Component', () => {

  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  let taskService: jasmine.SpyObj<TaskService>;

  beforeEach(waitForAsync(() =>
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        MainComponent,
        FormComponent,
        BodyComponent,
        DialogComponent
      ],
      providers: [{
        provide: TaskService,
        useValue: taskServiceSpy
      }]
    }).compileComponents()));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;

    taskService = TestBed.inject(TaskService) as jasmine.SpyObj<TaskService>;
  });

  it('Should exist', () => {
    expect(component).toBeTruthy();
  });

  describe('Properties', () => {
    it('Should have an undefined tasks$ property', () => {
      expect(component.tasks$).toBeUndefined();
    });

    it('Should have a defined date property', () => {
      expect(component.date).toBeDefined();
    });

    it('Should have a defined subscription property', () => {
      expect(component.subscription).toEqual(new Subscription());
    });
  });

  describe('Methods', () => {
    it('Should unsubscribe', () => {
      spyOn(
        component.subscription,
        'unsubscribe'
      );

      expect(component.subscription.unsubscribe).not.toHaveBeenCalled();
      expect(component.subscription.unsubscribe).toHaveBeenCalledTimes(0);

      component.ngOnDestroy();

      expect(component.subscription.unsubscribe).toHaveBeenCalled();
      expect(component.subscription.unsubscribe).toHaveBeenCalledTimes(1);
    });
  });

});
