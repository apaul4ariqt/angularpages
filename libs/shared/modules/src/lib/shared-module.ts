// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotateTextDirective } from '@ng-mf-personal-profile/shared/directives';

@NgModule({
  declarations: [RotateTextDirective],
  imports: [CommonModule],
  exports: [RotateTextDirective]
})
export class SharedModule { }
