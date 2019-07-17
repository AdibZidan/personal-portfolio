import { AboutComponent } from "./about.component";

describe('About Component', () => {

  it('Should exist', () => { expect(AboutComponent).toBeDefined(); });

  it('Should be built with zero arguments', () => {

    const aboutComponent = new AboutComponent();

    expect(aboutComponent instanceof AboutComponent).toBe(true);

  });

});
