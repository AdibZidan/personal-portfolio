import { AppComponent } from './app.component';

describe('Application Component', () => {

  it('Should exist', () => expect(AppComponent).toBeDefined());

  it('Should be built with zero arguments', () => {

    const appComponent = new AppComponent();

    expect(appComponent instanceof AppComponent).toBeTruthy();

  });

});