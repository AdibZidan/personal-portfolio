import { HeaderComponent } from './header.component';

import { Title } from '@angular/platform-browser';

describe('Header Component', () => {

  it('Should exist', () => { expect(HeaderComponent).toBeDefined(); });

  it('Should be built with 1 argument; TitleService', () => {

    let titleService: Title;

    const headerComponent = new HeaderComponent(titleService);

    expect(headerComponent instanceof HeaderComponent).toBe(true);

  });

});
