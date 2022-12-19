import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
const MaterialComponets = [
   MatButtonModule,MatFormFieldModule,MatCardModule,MatInputModule,MatIconModule,MatSidenavModule,
  MatDividerModule,MatToolbarModule, MatProgressSpinnerModule, MatTableModule, MatSortModule, MatPaginatorModule
 ]
@NgModule({
  declarations: [],
  imports: [MaterialComponets],
    exports:[MaterialComponets]
})
export class MaterialModule { }
