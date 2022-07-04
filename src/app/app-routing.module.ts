import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PremCalcComponent } from "./prem-calc/prem-calc.component";


export const routes: Routes = [
    { path: '', component:PremCalcComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes, {
      useHash: true
    })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
