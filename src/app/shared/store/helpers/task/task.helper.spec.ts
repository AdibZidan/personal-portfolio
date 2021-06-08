import { tasksMock } from '@shared/mocks/tasks-mock';
import { incrementId, updateTask } from './task.helper';

describe('TaskHelper', () => {

  it('Should increment to the latest ID', () => {
    expect(incrementId(tasksMock)).toEqual(4);
  });

  it('Should set the isComplete property to true if the task is with 100 percentage', () => {
    expect(updateTask({
      id: 1,
      title: '',
      description: '',
      percentage: 100,
      isComplete: false
    })).toEqual({
      id: 1,
      title: '',
      description: '',
      percentage: 100,
      isComplete: true
    });
  });

  it('Should not change the isComplete or percentage properties if they are not true or 100 respectively', () => {
    expect(updateTask({
      id: 1,
      title: '',
      description: '',
      percentage: 50,
      isComplete: false
    })).toEqual({
      id: 1,
      title: '',
      description: '',
      percentage: 50,
      isComplete: false
    });
  });

  it('Should set the percentage property to 100 if the task is completed', () => {
    expect(updateTask({
      id: 1,
      title: '',
      description: '',
      percentage: 0,
      isComplete: true
    })).toEqual({
      id: 1,
      title: '',
      description: '',
      percentage: 100,
      isComplete: true
    });
  });

});
