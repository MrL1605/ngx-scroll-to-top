import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollToTopDirective} from './src/scroll-to-top.directive';

export {ScrollToTopDirective} from './src/scroll-to-top.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScrollToTopDirective
  ],
  exports: [
    ScrollToTopDirective
  ]
})
export class ScrollToTopModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ScrollToTopModule
    };
  }
}