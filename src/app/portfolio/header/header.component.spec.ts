import { HeaderComponent } from './header.component';

describe('Header Component', () => {

  it('Should exist', () => expect(HeaderComponent).toBeDefined());

  it('Should be built with 1 argument; TitleService', () => {

    const headerComponent = new HeaderComponent();

    expect(headerComponent instanceof HeaderComponent).toBeTruthy();

  });

});
