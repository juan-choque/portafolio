import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
// firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule} from '@angular/fire';
import { firebaseConfig } from '../environments/environment.prod';
// import { firebaseConfig } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortafolioComponent,
    BlogComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
