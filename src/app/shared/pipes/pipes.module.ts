import { NgModule } from '@angular/core';
import { ErrorCatcherPipe } from './error-catcher/error-catcher.pipe';

@NgModule({
  declarations: [ErrorCatcherPipe],
  exports: [ErrorCatcherPipe]
})
export class PipesModule { }
