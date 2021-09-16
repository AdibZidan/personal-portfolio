import { ViewportScroller } from '@angular/common';
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appOnScroll]'
})
export class OnScrollDirective {

  @Output()
  public isArrowShownEmitter: EventEmitter<boolean> = new EventEmitter();

  public constructor(
    private viewportScroller: ViewportScroller
  ) { }

  @HostListener('window:scroll')
  public onScroll(): void {
    const yAxis: number = this.viewportScroller.getScrollPosition()[1];

    if (yAxis > 700) {
      this.isArrowShownEmitter.emit(true);
    } else {
      this.isArrowShownEmitter.emit(false);
    }
  }

}
