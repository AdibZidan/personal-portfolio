import { AppComponent } from './app.component';

describe('Application Component', () => {

  let appComponent: AppComponent;

  beforeEach(() => appComponent = new AppComponent());

  it('Should exist', () => expect(appComponent).toBeDefined());

  it('Should be built with zero arguments', () => expect(appComponent instanceof AppComponent).toBeTruthy());

});