import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { UserModule } from './user/user.module';
import { HeaderModule } from './header/header.module';
import { OurCommonModule } from './comon.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OurCommonModule
  ],
  providers: [UserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
