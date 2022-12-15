import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";

const MaterialComponets = [
   MatButtonModule,MatFormFieldModule,MatCardModule,MatInputModule,MatIconModule,MatSidenavModule,
  MatDividerModule,MatToolbarModule
 ]
@NgModule({
  declarations: [],
  imports: [MaterialComponets],
    exports:[MaterialComponets]
})
export class MaterialModule { }
