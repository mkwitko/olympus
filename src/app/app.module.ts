/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//  Angular/Fire + Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';

//Cache
import { IonicStorageModule } from '@ionic/storage-angular';

//Globalization
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

//HTTP
import { HttpClient, HttpClientModule } from '@angular/common/http';

//Modules
import { MyHeaderModule } from './components/headers/my-header/my-header.module';
import { ClassesModule } from './shared/classes/class/class.module';

//UUID Gen
import { UUID } from 'angular2-uuid';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

//Toast
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ swipeBackEnabled: false }),
    AppRoutingModule,

    //Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,

    // Cache System
    IonicStorageModule.forRoot(),

    //Globalization
    TranslateModule.forRoot({
      defaultLanguage: 'pt',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
    }),

    //HTTP
    HttpClientModule,


    //Components Modules
    MyHeaderModule,


    //General Modules
    ClassesModule,

    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

  //UUID
  UUID

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
