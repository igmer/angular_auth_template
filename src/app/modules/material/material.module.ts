import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";

const MaterialComponets = [
   MatButtonModule,MatFormFieldModule,MatCardModule,MatInputModule
 ]
@NgModule({
  declarations: [],
  imports: [MaterialComponets],
    exports:[MaterialComponets]
})
export class MaterialModule { }
