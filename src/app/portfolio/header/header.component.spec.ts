import { HeaderComponent } from './header.component';

describe('Header Component', () => {

  let headerComponent: HeaderComponent;

  beforeEach(() => headerComponent = new HeaderComponent());

  it('Should exist', () => expect(HeaderComponent).toBeDefined());

  it('Should be built with zero arguments', () => expect(headerComponent instanceof HeaderComponent).toBeTruthy());

});
