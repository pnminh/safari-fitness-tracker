import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule],
  exports: [MatFormFieldModule, MatInputModule],
  declarations: []
})
export class MaterialModule {}
