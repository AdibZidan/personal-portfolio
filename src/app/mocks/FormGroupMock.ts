import { Task } from '../task-manager/interface/Task';

export class FormGroupMock {

  public id: number;
  public title: string;
  public description: string;
  public percentage: number;
  public completed: boolean;

  constructor(data?: Task) {
    const defaults = {
      id: '',
      title: '',
      description: '',
      percentage: '',
      completed: '',
      ...data
    };

    this.id = defaults.id;
    this.title = defaults.title;
    this.description = defaults.description;
    this.percentage = defaults.percentage;
    this.completed = defaults.completed;
  }

  public getFormGroupMock() {
    const formGroupMock = new FormGroupMock();

    formGroupMock.id = 1;
    formGroupMock.title = 'Test title';
    formGroupMock.description = 'Test description';
    formGroupMock.percentage = 100;
    formGroupMock.completed = true;

    return formGroupMock;
  }

}
