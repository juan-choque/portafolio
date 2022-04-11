import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HeaderComponent } from './components/header/header.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ServicessComponent } from './components/servicess/servicess.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AboutComponent,
    PortafolioComponent,
    BlogComponent,
    ContactoComponent,
    HeaderComponent,
    TestimonialsComponent,
    ServicessComponent,
    FooterComponent,
    ModalComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AboutComponent,
    PortafolioComponent,
    BlogComponent,
    ContactoComponent,
    HeaderComponent,
    TestimonialsComponent,
    ServicessComponent,
    FooterComponent
  ]
})
export class SharedModule { }
