// filepath: my-fullstack-app/frontend/src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { PersonaButtonsComponent } from './components/persona-buttons/persona-buttons.component';
import { ConversationListingComponent } from './components/conversation-listing/conversation-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    PersonaButtonsComponent,
    ConversationListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }