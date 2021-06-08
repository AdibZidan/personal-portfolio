import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Task } from '@shared/interfaces/task.interface';
import { taskMock, tasksMock } from '@shared/mocks/tasks-mock';
import { deleteOne, setIsCompleted } from '@shared/store/actions/task/task.actions';
import { AppState } from '@shared/store/interfaces/app-state.interface';
import { DialogComponent } from '../dialog/dialog.component';
import { BodyComponent } from './body.component';

describe('Body Component', () => {

  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;
  let mockStore: MockStore<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        BodyComponent,
        DialogComponent
      ],
      providers: [provideMockStore()]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    mockStore.setState({
      tasks: tasksMock
    });
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Properties', () => {
    it('Should have a defined tasks$ property', (doneFn: DoneFn) => {
      component.tasks$.subscribe((tasks: Task[]): void => {
        expect(tasks.length).toEqual(3);

        doneFn();
      });
    });
  });

  describe('Methods', () => {
    let dispatchSpy: jasmine.Spy;

    beforeEach(() => {
      dispatchSpy = spyOn(mockStore, 'dispatch');
    });

    it('Should dispatch setIsCompleted action', () => {
      component.setIsCompleted(taskMock);

      expect(dispatchSpy).toHaveBeenCalled();
      expect(dispatchSpy.calls.first().args[0]).toEqual({
        id: taskMock.id,
        title: taskMock.title,
        description: taskMock.description,
        percentage: taskMock.percentage,
        isComplete: taskMock.isComplete,
        type: setIsCompleted.type
      });
    });

    it('Should dispatch deleteOne action', () => {
      component.deleteOne(taskMock.id);

      expect(dispatchSpy).toHaveBeenCalled();
      expect(dispatchSpy.calls.first().args[0]).toEqual({
        id: taskMock.id,
        type: deleteOne.type
      });
    });
  });

});
