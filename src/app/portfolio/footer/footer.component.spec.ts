import { FooterComponent } from './footer.component';

describe('Footer Component', () => {

  let footerComponent: FooterComponent;

  beforeEach(() => footerComponent = new FooterComponent());

  it('Should exist', () => expect(FooterComponent).toBeDefined());

  it('Should be built with zero arguments', () => expect(footerComponent instanceof FooterComponent).toBeTruthy());

  it('Should return the current year', () => {

    const expectedYear = footerComponent.currentYear, actualYear = new Date().getFullYear();

    expect(expectedYear).toBe(actualYear);

  });

});

