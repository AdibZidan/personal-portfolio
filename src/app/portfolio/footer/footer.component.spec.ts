import { FooterComponent } from './footer.component';

describe('Footer Component', () => {

  let footerComponent: FooterComponent;

  beforeEach(() => { footerComponent = new FooterComponent(); });

  it('Should exist', () => { expect(FooterComponent).toBeDefined(); });

  it('Should be built with zero arguments', () => {
    expect(footerComponent instanceof FooterComponent)
      .toBe(true);
  });

  it('Should return the current year', () => {

    const currentYear = new Date().getFullYear(), expectedYear = footerComponent.currentYear;

    expect(expectedYear).toBe(currentYear);

  })

});

