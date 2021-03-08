import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './signup/signup.component';

@NgModule({
  imports: [ReactiveFormsModule, FormsModule],
  exports: [SignUpComponent],
  declarations: [SignUpComponent],
})
export class FeaturesModule {}
