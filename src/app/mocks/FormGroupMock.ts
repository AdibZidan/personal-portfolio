export class FormGroupMock {

  public id: string;
  public title: string;
  public description: string;
  public percentage: number;
  public completed: boolean;

  constructor(data?: any) {
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
    const formMock = new FormGroupMock();

    formMock.id = '1';
    formMock.title = 'Test title';
    formMock.description = 'Test description';
    formMock.percentage = 100;
    formMock.completed = true;

    return formMock;
  }

}
