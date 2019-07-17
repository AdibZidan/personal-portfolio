import { HeaderComponent } from "./header.component";

describe('Header Component', () => {

  it('Should exist', () => { expect(HeaderComponent).toBeDefined(); });

  it('Should be built with no arguments', () => {

    const headerComponent = new HeaderComponent();

    expect(headerComponent instanceof HeaderComponent).toBe(true);

  });

});
