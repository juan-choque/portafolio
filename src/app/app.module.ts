import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule} from '@angular/fire';
import { firebaseConfig } from '../environments/environment.prod';
import { FormsModule } from '@angular/forms';
// import { firebaseConfig } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
