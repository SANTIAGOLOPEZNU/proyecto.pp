import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
    //Declaramos navbar y footer
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
