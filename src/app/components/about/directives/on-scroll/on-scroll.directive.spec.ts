import { ViewportScroller } from '@angular/common';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { OnScrollDirective } from './on-scroll.directive';

describe('OnScrollDirective', () => {

  let directive: OnScrollDirective;

  let viewportScroller: ViewportScroller;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [OnScrollDirective]
    });
  }));

  beforeEach(() => {
    directive = TestBed.inject(OnScrollDirective);

    viewportScroller = TestBed.inject(ViewportScroller);
  });

  describe('Properties', () => {

    let isArrowShownEmitterSpy: jasmine.Spy;

    beforeEach(() => {
      isArrowShownEmitterSpy = spyOn(directive.isArrowShownEmitter, 'emit');
    });

    it('Should have a defined isArrowShownEmitter output property', () => {
      expect(directive.isArrowShownEmitter).toBeDefined();
    });

    it(`Shouldn't emit if the yAxis is less than 700`, () => {
      spyOn(
        viewportScroller,
        'getScrollPosition'
      ).and.returnValue([0, 699]);

      directive.onScroll();

      expect(isArrowShownEmitterSpy).toHaveBeenCalled();
      expect(isArrowShownEmitterSpy).toHaveBeenCalledTimes(1);
      expect(isArrowShownEmitterSpy).toHaveBeenCalledWith(false);
    });

    it('Should emit if the yAxis is greater than 700', () => {
      spyOn(
        viewportScroller,
        'getScrollPosition'
      ).and.returnValue([0, 701]);

      directive.onScroll();

      expect(isArrowShownEmitterSpy).toHaveBeenCalled();
      expect(isArrowShownEmitterSpy).toHaveBeenCalledTimes(1);
      expect(isArrowShownEmitterSpy).toHaveBeenCalledWith(true);
    });
  });

});
